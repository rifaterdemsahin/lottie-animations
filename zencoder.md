# Zencoder Notes

## Copilot Insights
1. Keep 3D animations inside `symbols/threejs/` to preserve structure.
2. Start from the shared Three.js template with prompt tooling, orbit controls, lights, and responsive renderer.
3. Register every new scene on `index.html` with badges, icon, description, and demo link.
4. Provide a prompt container describing the animation and detailed generation steps.
5. Maintain performance with responsive lighting, controls, and resize handling.
6. Attach text to moving meshes whenever elements converge or travel together.
7. Finalize each animation cycle with commits and pushes so the gallery stays current.

## Animation Checklist
- **Scene Setup**: Scene, camera, renderer, and background colors match project look.
- **Lighting**: Blend ambient with point lights for depth without overexposure.
- **Interaction**: Enable `OrbitControls` damping for smooth exploration.
- **Responsiveness**: Update camera and renderer on window resize.
- **Typography**: Load Helvetiker font and center bold labels per style.
- **Prompt UI**: Link `shared/prompt.css` and `shared/prompt.js`, plus copy button.
- **Index Card**: Add badges (Three.js, AI/ML, Interactive) and creation date.
- **Performance**: Use `requestAnimationFrame` loops and keep geometry counts balanced.
