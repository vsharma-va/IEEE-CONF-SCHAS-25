<script>
    // Function to generate a random blue shade on hover
    function getRandomBlue() {
        const blueShades = [
            'bg-blue-900',
            'bg-blue-700',
            'bg-white',
            'bg-green-800',
            'bg-pink-600',
        ];
        return blueShades[Math.floor(Math.random() * blueShades.length)];
    }
</script>

<div class="grid grid-cols-3 gap-1 w-full h-screen p-2">
    {#each Array(3) as _, i}
        <div
                class="w-full h-full border border-[#232323] transition-all duration-300"
                on:mouseover={(event) => event.target.classList.add(getRandomBlue())}
                on:mouseleave={(event) => {
        event.target.classList.remove('bg-blue-900', 'bg-blue-700', 'bg-white', 'bg-green-800', 'bg-pink-600');
      }}
        ></div>
    {/each}
</div>

<style>
    /* Customize the width and height for each grid box if needed */
    .grid div {
        aspect-ratio: 1;
    }
</style>
