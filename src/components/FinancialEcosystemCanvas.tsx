"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface NodeData {
  id: string;
  label: string;
  category: "treasury" | "equity" | "liquidity" | "private" | "collateral";
  basePos: [number, number, number];
  color: number;
  size: number;
}

const NODES_CONFIG: NodeData[] = [
  { id: "core", label: "Consolidated Axis", category: "treasury", basePos: [0, 0, 0], color: 0x003527, size: 0.45 },
  { id: "tbills", label: "Treasury Repo (4W)", category: "treasury", basePos: [-2.2, 1.2, 0.4], color: 0x10b981, size: 0.3 },
  { id: "sweep", label: "Automated Sweep", category: "liquidity", basePos: [-1.4, -1.5, 0.8], color: 0x10b981, size: 0.28 },
  { id: "checking", label: "Commercial Checking", category: "liquidity", basePos: [-3.0, -0.6, -0.5], color: 0xd97706, size: 0.32 },
  { id: "equity", label: "Global Equities Core", category: "equity", basePos: [1.8, 1.6, -0.6], color: 0x006c49, size: 0.38 },
  { id: "etf", label: "Factor Hedge ETF", category: "equity", basePos: [2.6, 0.4, 0.8], color: 0x006c49, size: 0.25 },
  { id: "venture", label: "Direct Venture Series A", category: "private", basePos: [1.5, -1.8, 0.5], color: 0x92400e, size: 0.3 },
  { id: "syndicate", label: "Syndicate LP Allocation", category: "private", basePos: [3.1, -1.0, -0.7], color: 0x92400e, size: 0.26 },
  { id: "realestate", label: "Real Asset Senior Liens", category: "collateral", basePos: [-0.6, 2.4, -1.0], color: 0x1e293b, size: 0.32 },
  { id: "escrow", label: "IRS Tax Escrow Shield", category: "treasury", basePos: [-1.8, 0.2, 1.6], color: 0x10b981, size: 0.24 },
  { id: "collar", label: "Downside Collar Protection", category: "equity", basePos: [0.8, -0.4, -1.8], color: 0x006c49, size: 0.22 },
];

export default function FinancialEcosystemCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<string | null>("core");
  const [activeMode, setActiveMode] = useState<"cluster" | "aligned" | "yield">("cluster");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Subtle ambient & directional lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight1.position.set(5, 8, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x10b981, 1.2);
    dirLight2.position.set(-6, -4, -3);
    scene.add(dirLight2);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Create 3D Nodes
    const nodeMeshes: {
      mesh: THREE.Mesh;
      halo: THREE.Mesh;
      config: NodeData;
      currentPos: THREE.Vector3;
      targetPos: THREE.Vector3;
    }[] = [];

    const sphereGeo = new THREE.SphereGeometry(1, 24, 24);
    const ringGeo = new THREE.RingGeometry(1.2, 1.35, 32);

    NODES_CONFIG.forEach((cfg) => {
      // Core solid material with high-specular glass-like sheen
      const mat = new THREE.MeshPhysicalMaterial({
        color: cfg.color,
        roughness: 0.15,
        metalness: 0.25,
        clearcoat: 0.8,
        clearcoatRoughness: 0.1,
        transmission: 0.1,
        transparent: true,
        opacity: 0.95,
      });

      const mesh = new THREE.Mesh(sphereGeo, mat);
      mesh.scale.setScalar(cfg.size);
      mesh.position.set(...cfg.basePos);
      mesh.userData = { id: cfg.id, label: cfg.label };

      // Halo ring
      const ringMat = new THREE.MeshBasicMaterial({
        color: cfg.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.28,
      });
      const halo = new THREE.Mesh(ringGeo, ringMat);
      halo.scale.setScalar(cfg.size * 1.35);
      halo.position.copy(mesh.position);

      rootGroup.add(mesh);
      rootGroup.add(halo);

      nodeMeshes.push({
        mesh,
        halo,
        config: cfg,
        currentPos: new THREE.Vector3(...cfg.basePos),
        targetPos: new THREE.Vector3(...cfg.basePos),
      });
    });

    // Connecting Network Lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x006c49,
      transparent: true,
      opacity: 0.22,
    });

    const linesGroup = new THREE.Group();
    rootGroup.add(linesGroup);

    const updateLines = () => {
      // Clear previous lines
      while (linesGroup.children.length > 0) {
        const obj = linesGroup.children[0];
        linesGroup.remove(obj);
      }

      // Draw lines between nodes within distance threshold
      for (let i = 0; i < nodeMeshes.length; i++) {
        for (let j = i + 1; j < nodeMeshes.length; j++) {
          const p1 = nodeMeshes[i].mesh.position;
          const p2 = nodeMeshes[j].mesh.position;
          const dist = p1.distanceTo(p2);

          if (dist < 3.8) {
            const lineGeo = new THREE.BufferGeometry().setFromPoints([p1, p2]);
            const line = new THREE.Line(lineGeo, lineMaterial);
            linesGroup.add(line);
          }
        }
      }
    };

    updateLines();

    // Floating Data Packets (Pulses flowing between nodes)
    const packetsCount = 18;
    const packetGeo = new THREE.SphereGeometry(0.04, 12, 12);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
    const packets: {
      mesh: THREE.Mesh;
      startNode: number;
      endNode: number;
      progress: number;
      speed: number;
    }[] = [];

    for (let i = 0; i < packetsCount; i++) {
      const pMesh = new THREE.Mesh(packetGeo, packetMat);
      const startIdx = Math.floor(Math.random() * nodeMeshes.length);
      let endIdx = Math.floor(Math.random() * nodeMeshes.length);
      while (endIdx === startIdx) {
        endIdx = Math.floor(Math.random() * nodeMeshes.length);
      }

      rootGroup.add(pMesh);
      packets.push({
        mesh: pMesh,
        startNode: startIdx,
        endNode: endIdx,
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.005,
      });
    }

    // Dynamic Mouse Parallax & Scroll Reaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let scrollProgress = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
      targetRotationY = mouseX * 0.45;
      targetRotationX = mouseY * 0.35;
    };

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = Math.min(Math.max(scrolled / (docHeight || 1), 0), 1);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Raycasting for interactive hover / click on nodes
    const raycaster = new THREE.Raycaster();
    const mouseVector = new THREE.Vector2();

    const handleCanvasClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseVector.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseVector.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouseVector, camera);
      const intersects = raycaster.intersectObjects(
        nodeMeshes.map((n) => n.mesh)
      );

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        setActiveNode(hit.userData.id);
      }
    };

    container.addEventListener("click", handleCanvasClick);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Optimization: Pause animation loop when offscreen
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    setIsLoaded(true);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      // Smooth camera lerp based on scroll
      camera.position.z = 7.8 - scrollProgress * 1.5;
      camera.position.y = -scrollProgress * 0.8;

      // Base idle rotation + mouse parallax lerp
      rootGroup.rotation.y += (targetRotationY - rootGroup.rotation.y) * 0.04 + 0.0012;
      rootGroup.rotation.x += (targetRotationX - rootGroup.rotation.x) * 0.04;

      // Subtle breath oscillation on nodes
      nodeMeshes.forEach((item, idx) => {
        const floatOffset = Math.sin(elapsed * 1.2 + idx) * 0.06;
        item.mesh.position.y = item.currentPos.y + floatOffset;
        item.halo.position.copy(item.mesh.position);
        item.halo.lookAt(camera.position);

        // Pulse the active node
        if (item.config.id === activeNode) {
          item.mesh.scale.setScalar(
            item.config.size * (1 + Math.sin(elapsed * 4) * 0.08)
          );
          item.halo.scale.setScalar(
            item.config.size * 1.6 * (1 + Math.sin(elapsed * 4) * 0.12)
          );
        } else {
          item.mesh.scale.setScalar(item.config.size);
          item.halo.scale.setScalar(item.config.size * 1.35);
        }
      });

      // Animate flowing data packets
      packets.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          p.startNode = p.endNode;
          let next = Math.floor(Math.random() * nodeMeshes.length);
          while (next === p.startNode) {
            next = Math.floor(Math.random() * nodeMeshes.length);
          }
          p.endNode = next;
        }

        const start = nodeMeshes[p.startNode].mesh.position;
        const end = nodeMeshes[p.endNode].mesh.position;
        p.mesh.position.lerpVectors(start, end, p.progress);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("click", handleCanvasClick);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [activeNode]);

  return (
    <div className="relative w-full h-[440px] sm:h-[500px] lg:h-[560px] rounded-xl overflow-hidden bg-gradient-to-b from-[#F4F4F1]/60 to-[#FBFBFA] border border-black/[0.06] shadow-sm select-none">
      {/* Three.js Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Left: 3D Telemetry & System Indicator */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1 rounded bg-white/90 backdrop-blur-md border border-black/[0.08] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
          <span className="font-mono text-[10px] text-primary uppercase font-semibold">
            3D Topology: Living Capital Lattice
          </span>
          <span className="font-mono text-[10px] text-[#4B5563] border-l border-black/10 pl-2">
            11 Synchronized Nodes
          </span>
        </div>
        <span className="font-mono text-[9px] text-[#9CA3AF] pl-1">
          Drag / hover to inspect multi-hop capital clearing
        </span>
      </div>

      {/* Top Right: Active Node Inspector Card */}
      {activeNode && (
        <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-md p-3.5 rounded border border-black/[0.08] shadow-sm max-w-[220px] transition-all">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="font-mono text-[9px] uppercase text-[#4B5563] font-semibold">
              Selected Protocol Node
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
          </div>
          <div className="font-serif text-sm font-medium text-primary leading-tight">
            {NODES_CONFIG.find((n) => n.id === activeNode)?.label || "Capital Axis"}
          </div>
          <div className="font-mono text-[10px] text-[#006C49] mt-1 font-medium">
            Status: Sub-millisecond attestation active
          </div>
        </div>
      )}

      {/* Bottom Center: Mode Switcher Pills */}
      <div className="absolute bottom-4 inset-x-4 z-10 flex flex-wrap items-center justify-between gap-3 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded border border-black/[0.08] shadow-sm">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase text-[#4B5563] font-semibold hidden sm:inline">
            Active Projection:
          </span>
          <div className="flex items-center gap-1 font-mono text-[10px]">
            <button
              onClick={() => setActiveMode("cluster")}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeMode === "cluster"
                  ? "bg-primary text-white font-medium"
                  : "text-[#4B5563] hover:text-[#111827]"
              }`}
            >
              Full Ecosystem
            </button>
            <button
              onClick={() => {
                setActiveMode("aligned");
                setActiveNode("tbills");
              }}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeMode === "aligned"
                  ? "bg-primary text-white font-medium"
                  : "text-[#4B5563] hover:text-[#111827]"
              }`}
            >
              Yield Sweeps
            </button>
            <button
              onClick={() => {
                setActiveMode("yield");
                setActiveNode("escrow");
              }}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeMode === "yield"
                  ? "bg-primary text-white font-medium"
                  : "text-[#4B5563] hover:text-[#111827]"
              }`}
            >
              Escrow Shields
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] text-[#4B5563]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
          <span>Real-time WebGL Telemetry</span>
        </div>
      </div>
    </div>
  );
}
