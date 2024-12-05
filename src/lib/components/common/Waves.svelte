<script lang="ts">
    import { onMount } from 'svelte';

    export let waveCount: number = 3; // Number of waves
    export let gradients: string[] = [
        'rgb(31,84,222)',
        'rgb(239,191,4)',
        'rgb(31,84,222)'
    ]; // Gradient colors for the waves
    export let waveWidth: number = 5; // Thickness of the waves in pixels
    export let baseSpeed: number = 0.01; // Base speed of wave movement
    export let baseAmplitude: number = 50; // Base height of the wave
    export let baseFrequency: number = 0.02; // Base frequency of the wave

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D | null = null;
    let animationFrame: number;

    const waves: { phase: number; amplitude: number; frequency: number; speed: number; direction: number }[] = [];

    onMount(() => {
        if (canvas) {
            ctx = canvas.getContext('2d');
            for (let i = 0; i < waveCount; i++) {
                waves.push({
                    phase: i * Math.PI / waveCount,
                    amplitude: baseAmplitude + i * 10,
                    frequency: baseFrequency + i * 0.005,
                    speed: baseSpeed + i * 0.005,
                    direction: i % 2 === 0 ? 1 : -1, // Alternate direction for waves
                });
            }
            resizeCanvas();
            animate();
        }

        window.addEventListener('resize', resizeCanvas);
        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener('resize', resizeCanvas);
        };
    });

    function resizeCanvas() {
        if (canvas) {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }
    }

    function drawWave(phase: number, amplitude: number, frequency: number, gradient: string, direction: number) {
        if (!ctx) return;

        const centerY = canvas.height / 2;
        const centerX = canvas.width / 2;

        const gradientFill = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradientFill.addColorStop(0, gradient);
        gradientFill.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.lineWidth = waveWidth;
        ctx.strokeStyle = gradientFill;

        for (let x = 0; x < canvas.width; x++) {
            const distanceFromCenter = Math.abs(centerX - x);
            const scaleFactor = Math.max(0, 1 - distanceFromCenter / centerX); // Scale amplitude as it moves away from center
            const y =
                centerY +
                direction *
                Math.sin((x * frequency) + phase) *
                amplitude *
                scaleFactor;
            ctx.lineTo(x, y);
        }
        ctx.stroke();
    }

    function animate() {
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        waves.forEach((wave, index) => {
            wave.phase += wave.speed;
            drawWave(
                wave.phase,
                wave.amplitude,
                wave.frequency,
                gradients[index % gradients.length],
                wave.direction
            );
        });

        animationFrame = requestAnimationFrame(animate);
    }
</script>

<canvas bind:this={canvas} class="w-full h-full"></canvas>

<style>
    canvas {
        display: block;
        width: 100%;
        height: 100%;
    }
</style>
