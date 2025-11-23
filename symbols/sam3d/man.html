import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const SkillTransformation = () => {
  const mountRef = useRef(null);
  const [stage, setStage] = useState(0);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const figureRef = useRef(null);
  const skillsRef = useRef([]);

  const stages = [
    { title: "Before AI Revolution", description: "I-Shaped Skills: Deep expertise in one domain" },
    { title: "AI Disruption Begins", description: "Traditional skills face automation" },
    { title: "Learning & Adaptation", description: "Acquiring AI literacy and adjacent skills" },
    { title: "After AI Revolution", description: "X-Shaped Skills: Multi-domain expertise with AI integration" }
  ];

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 15;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00ffff, 1);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff00ff, 1);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    // Create human figure
    const createFigure = () => {
      const group = new THREE.Group();

      // Head
      const headGeom = new THREE.SphereGeometry(0.8, 32, 32);
      const headMat = new THREE.MeshPhongMaterial({ color: 0xffdbac });
      const head = new THREE.Mesh(headGeom, headMat);
      head.position.y = 4;
      group.add(head);

      // Body
      const bodyGeom = new THREE.CylinderGeometry(0.6, 0.8, 2.5, 32);
      const bodyMat = new THREE.MeshPhongMaterial({ color: 0x2196F3 });
      const body = new THREE.Mesh(bodyGeom, bodyMat);
      body.position.y = 2;
      group.add(body);

      // Arms
      const armGeom = new THREE.CylinderGeometry(0.2, 0.2, 2, 16);
      const armMat = new THREE.MeshPhongMaterial({ color: 0x2196F3 });
      
      const leftArm = new THREE.Mesh(armGeom, armMat);
      leftArm.position.set(-1, 2.5, 0);
      leftArm.rotation.z = Math.PI / 6;
      group.add(leftArm);

      const rightArm = new THREE.Mesh(armGeom, armMat);
      rightArm.position.set(1, 2.5, 0);
      rightArm.rotation.z = -Math.PI / 6;
      group.add(rightArm);

      // Legs
      const legGeom = new THREE.CylinderGeometry(0.25, 0.25, 2.5, 16);
      const legMat = new THREE.MeshPhongMaterial({ color: 0x1976D2 });
      
      const leftLeg = new THREE.Mesh(legGeom, legMat);
      leftLeg.position.set(-0.4, -0.5, 0);
      group.add(leftLeg);

      const rightLeg = new THREE.Mesh(legGeom, legMat);
      rightLeg.position.set(0.4, -0.5, 0);
      group.add(rightLeg);

      return group;
    };

    const figure = createFigure();
    scene.add(figure);
    figureRef.current = figure;

    // Create skill orbs
    const createSkillOrb = (label, color, position) => {
      const geometry = new THREE.SphereGeometry(0.5, 32, 32);
      const material = new THREE.MeshPhongMaterial({ 
        color: color,
        emissive: color,
        emissiveIntensity: 0.3,
        transparent: true,
        opacity: 0.8
      });
      const orb = new THREE.Mesh(geometry, material);
      orb.position.copy(position);
      orb.userData.label = label;
      orb.userData.targetPos = position.clone();
      scene.add(orb);
      return orb;
    };

    // Initialize with I-shaped skills
    const initSkills = () => {
      skillsRef.current.forEach(orb => scene.remove(orb));
      skillsRef.current = [];

      const iShapedSkills = [
        { label: "Core Expertise", color: 0x4CAF50, pos: new THREE.Vector3(0, 6, 0) },
        { label: "Domain Knowledge", color: 0x4CAF50, pos: new THREE.Vector3(0, 4.5, 0) },
        { label: "Technical Skills", color: 0x4CAF50, pos: new THREE.Vector3(0, 3, 0) },
        { label: "Specialized", color: 0x4CAF50, pos: new THREE.Vector3(0, 1.5, 0) }
      ];

      iShapedSkills.forEach(skill => {
        const orb = createSkillOrb(skill.label, skill.color, skill.pos);
        skillsRef.current.push(orb);
      });
    };

    initSkills();

    // Animation loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Rotate figure slightly
      if (figureRef.current) {
        figureRef.current.rotation.y = Math.sin(time * 0.5) * 0.1;
      }

      // Animate skill orbs
      skillsRef.current.forEach((orb, index) => {
        orb.position.y += Math.sin(time * 2 + index) * 0.002;
        orb.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  const transformSkills = (stageIndex) => {
    setStage(stageIndex);
    const scene = sceneRef.current;
    if (!scene) return;

    // Clear existing skills
    skillsRef.current.forEach(orb => scene.remove(orb));
    skillsRef.current = [];

    const createSkillOrb = (label, color, position) => {
      const geometry = new THREE.SphereGeometry(0.5, 32, 32);
      const material = new THREE.MeshPhongMaterial({ 
        color: color,
        emissive: color,
        emissiveIntensity: 0.3,
        transparent: true,
        opacity: 0.8
      });
      const orb = new THREE.Mesh(geometry, material);
      orb.position.copy(position);
      orb.userData.label = label;
      scene.add(orb);
      return orb;
    };

    if (stageIndex === 0) {
      // I-shaped skills
      const skills = [
        { label: "Core Expertise", color: 0x4CAF50, pos: new THREE.Vector3(0, 6, 0) },
        { label: "Domain Knowledge", color: 0x4CAF50, pos: new THREE.Vector3(0, 4.5, 0) },
        { label: "Technical Skills", color: 0x4CAF50, pos: new THREE.Vector3(0, 3, 0) },
        { label: "Specialized", color: 0x4CAF50, pos: new THREE.Vector3(0, 1.5, 0) }
      ];
      skills.forEach(s => skillsRef.current.push(createSkillOrb(s.label, s.color, s.pos)));
    } else if (stageIndex === 1) {
      // Disruption - fading skills
      const skills = [
        { label: "Core Expertise", color: 0xFF9800, pos: new THREE.Vector3(-1, 6, 0) },
        { label: "Domain Knowledge", color: 0xFF9800, pos: new THREE.Vector3(1, 4.5, 0) },
        { label: "Technical Skills", color: 0xFF5722, pos: new THREE.Vector3(-0.5, 3, 0) },
        { label: "At Risk", color: 0xF44336, pos: new THREE.Vector3(0.5, 1.5, 0) }
      ];
      skills.forEach(s => skillsRef.current.push(createSkillOrb(s.label, s.color, s.pos)));
    } else if (stageIndex === 2) {
      // Learning phase
      const skills = [
        { label: "Original Skills", color: 0x4CAF50, pos: new THREE.Vector3(0, 5, 0) },
        { label: "AI Literacy", color: 0x00BCD4, pos: new THREE.Vector3(-2, 3, 0) },
        { label: "Data Skills", color: 0x00BCD4, pos: new THREE.Vector3(2, 3, 0) },
        { label: "Adjacent Domain", color: 0x9C27B0, pos: new THREE.Vector3(-2, 1, 0) },
        { label: "Soft Skills", color: 0x9C27B0, pos: new THREE.Vector3(2, 1, 0) }
      ];
      skills.forEach(s => skillsRef.current.push(createSkillOrb(s.label, s.color, s.pos)));
    } else if (stageIndex === 3) {
      // X-shaped skills
      const skills = [
        { label: "Core + AI", color: 0x00E676, pos: new THREE.Vector3(0, 5, 0) },
        { label: "Domain 1", color: 0x00E5FF, pos: new THREE.Vector3(-3, 3, 0) },
        { label: "AI Integration", color: 0xFF6D00, pos: new THREE.Vector3(0, 3, 0) },
        { label: "Domain 2", color: 0x00E5FF, pos: new THREE.Vector3(3, 3, 0) },
        { label: "Adaptability", color: 0xE040FB, pos: new THREE.Vector3(-2.5, 1, 0) },
        { label: "Collaboration", color: 0xE040FB, pos: new THREE.Vector3(0, 0.5, 0) },
        { label: "Innovation", color: 0xE040FB, pos: new THREE.Vector3(2.5, 1, 0) }
      ];
      skills.forEach(s => skillsRef.current.push(createSkillOrb(s.label, s.color, s.pos)));
    }
  };

  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col">
      <div className="flex-1" ref={mountRef} />
      
      <div className="bg-gray-800 p-6 border-t-2 border-cyan-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">{stages[stage].title}</h2>
          <p className="text-gray-300 mb-4">{stages[stage].description}</p>
          
          <div className="flex gap-3 flex-wrap">
            {stages.map((s, index) => (
              <button
                key={index}
                onClick={() => transformSkills(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  stage === index
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/50'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Stage {index + 1}
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="font-bold text-green-400 mb-2">I-Shaped Skills (Before)</h3>
              <p className="text-gray-300">Deep vertical expertise in a single domain without broad capabilities</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="font-bold text-purple-400 mb-2">X-Shaped Skills (After)</h3>
              <p className="text-gray-300">Cross-functional expertise spanning multiple domains with AI augmentation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTransformation;
