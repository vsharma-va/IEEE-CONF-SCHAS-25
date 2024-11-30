<script>
    import { onMount } from 'svelte';

    let canvas;
    let width, height, context;

    // Gradient color configuration
    const colors = [
        { r: 58, g: 141, b: 255 },   // Blue
        { r: 58, g: 213, b: 255 },   // Aqua
        { r: 255, g: 91, b: 71 },    // Coral
        { r: 58, g: 255, b: 181 },   // Mint
        { r: 255, g: 184, b: 71 }    // Soft Orange
    ];

    let gradientPositions = [];

    function createGradientPositions() {
        gradientPositions = colors.map(() => ({
            x: Math.random() * width,
            y: Math.random() * height,
            dx: (Math.random() - 0.5) * 0.2,
            dy: (Math.random() - 0.5) * 0.2
        }));
    }

    function animateGradient() {
        context.clearRect(0, 0, width, height);

        // Create radial gradient
        const gradient = context.createRadialGradient(
            gradientPositions[0].x, gradientPositions[0].y, 0,
            gradientPositions[0].x, gradientPositions[0].y, width
        );

        // Add gradient colors
        colors.forEach((color, index) => {
            const { r, g, b } = color;
            gradient.addColorStop(index / (colors.length - 1), `rgba(${r}, ${g}, ${b}, 0.6)`);
        });

        context.fillStyle = gradient;
        context.fillRect(0, 0, width, height);

        // Update positions of gradient colors to animate
        gradientPositions.forEach(pos => {
            pos.x += pos.dx;
            pos.y += pos.dy;

            // Boundary check for smooth wrapping
            if (pos.x < 0 || pos.x > width) pos.dx *= -1;
            if (pos.y < 0 || pos.y > height) pos.dy *= -1;
        });

        requestAnimationFrame(animateGradient);
    }

    onMount(() => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        context = canvas.getContext('2d');
        createGradientPositions();
        animateGradient();
    });

    // Adjust canvas on window resize
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        createGradientPositions();
    });
</script>

<canvas bind:this={canvas} style="display: block; width: 100vw; height: 100vh;"></canvas>

<style>
    canvas {
        background: #000000; /* Black background for a richer gradient contrast */
    }
</style>
