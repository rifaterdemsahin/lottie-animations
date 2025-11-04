# Copilot Notes for Lottie Animations Project

## Animation Creation Guidelines

When creating new animations for this project:

1. **File Structure**: All Three.js animations go in `symbols/threejs/` directory
2. **Template**: Use the standard template with:
   - Prompt container with copy button functionality
   - Link to `shared/prompt.css` and `shared/prompt.js`
   - Import map for Three.js modules
   - Standard Three.js setup (scene, camera, renderer, lights)

3. **Index Page**: Always add new animations to `index.html` with:
   - Appropriate category section
   - Descriptive card with icon
   - Badge labels (Three.js, Lottie, AI/ML, Interactive)
   - Link to the animation file

4. **Prompt Template**: Include the prompt container with:
   - Brief description
   - Detailed step-by-step instructions in textarea
   - Copy button for easy prompt copying

5. **Best Practices**:
   - Use OrbitControls for camera interaction
   - Add window resize handlers
   - Include proper lighting (ambient + point lights)
   - Make animations responsive and performant
   - Add clear comments explaining key concepts
   - **Text Guidelines**: Make text bigger and bold. When objects converge, attach text as children to the mesh so text moves with objects, not independently
   - **Always Commit & Push**: After creating any animation, always commit and push to repository

## Recent Additions

- **colorful_convergence.html**: Colorful icons converging to center over 5 seconds, colors merging into one unified color
- **skill_merge_answer.html**: ChatGPT, CV, and Job Description components converge over 6 seconds, text attached to objects, final answer displayed

