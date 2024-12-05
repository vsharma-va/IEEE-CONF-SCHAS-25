<script lang="ts">
    import { onMount } from 'svelte';

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D | null;
    let particles: Particle[] = [];
    let maxDistance = 150;
    let convergenceRange = 200; // Pixels within which particles are influenced by the mouse
    let nearbyCount = 5; // Number of closest particles to be influenced
    let mouse = { x: -1000, y: -1000 }; // Start off-screen to avoid auto-convergence

    class Particle {
        x: number;
        y: number;
        vx: number;
        vy: number;
        size: number;

        constructor() {
            this.x = Math.random() * window.innerWidth;
            this.y = Math.random() * window.innerHeight;
            this.vx = (Math.random() - 0.5) * 2;
            this.vy = (Math.random() - 0.5) * 2;
            this.size = Math.random() * 3 + 1;
        }

        update() {
            // Update position based on velocity
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off walls
            if (this.x <= 0 || this.x >= window.innerWidth) this.vx *= -1;
            if (this.y <= 0 || this.y >= window.innerHeight) this.vy *= -1;

            this.vx *= 0.99; // Apply friction for smoother movement
            this.vy *= 0.99;
        }

        draw() {
            if (!ctx) return;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(50, 115, 220, 0.8)";
            ctx.fill();
        }
    }

    function connectParticles() {
        if (!ctx) return;

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                let dx = particles[i].x - particles[j].x;
                let dy = particles[i].y - particles[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    ctx.strokeStyle = `rgba(50, 115, 220, ${
                        1 - distance / maxDistance
                    })`;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function findNearbyParticles() {
        // Find particles close to the mouse
        let distances = particles.map((p, i) => {
            let dx = mouse.x - p.x;
            let dy = mouse.y - p.y;
            return { index: i, distance: Math.sqrt(dx * dx + dy * dy) };
        });

        // Sort by distance and select the closest `nearbyCount` particles
        return distances
            .filter((d) => d.distance < convergenceRange)
            .sort((a, b) => a.distance - b.distance)
            .slice(0, nearbyCount)
            .map((d) => particles[d.index]);
    }

    function animate() {
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Move the nearest particles towards the mouse
        let nearbyParticles = findNearbyParticles();
        for (let particle of nearbyParticles) {
            let dx = mouse.x - particle.x;
            let dy = mouse.y - particle.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > 10) {
                particle.vx += (dx / distance) * 0.5;
                particle.vy += (dy / distance) * 0.5;
            }
        }

        // Update and draw all particles
        particles.forEach((particle) => {
            particle.update();
            particle.draw();
        });

        connectParticles();
        requestAnimationFrame(animate);
    }

    onMount(() => {
        let particleCount;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        if(canvas.width >= 1024) {
            particleCount = 100;
        } else {
            particleCount = 0;
        }
        ctx = canvas.getContext("2d");

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        animate();

        // Track mouse movement
        window.addEventListener("mousemove", (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        // Resize canvas on window resize
        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    });
</script>

<canvas bind:this={canvas} class="absolute inset-0 z-0 pointer-events-none"></canvas>

<style>
    canvas {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
    }
</style>
