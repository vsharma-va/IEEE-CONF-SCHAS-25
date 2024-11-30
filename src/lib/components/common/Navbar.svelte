<script>
    import Footer from "$lib/components/common/Footer.svelte";

    let navMenu;
    let isNavOpen = false;
</script>

<div class="absolute top-5 right-5 z-[5]">
    <div class="flex items-end justify-center flex-row text-[1rem] brand-font text-primary gap-1">
        <div class="w-1 h-2 bg-on-surface animate-pulse"></div>
        <button class="leading-3" on:click={() => {
            if(isNavOpen) {
                navMenu.classList.add('hidden');
                isNavOpen = false;
            } else {
                navMenu.classList.remove('hidden');
                isNavOpen = true;
            }
        }}>{isNavOpen ? 'CLOSE': 'MENU'}
        </button>
    </div>
</div>
<div class="h-screen w-full fixed top-0 bg-surface hidden" id="nav-menu" bind:this={navMenu}>
    <div class="h-fit w-full flex flex-col pl-5 mt-32">
        <p class="text-xl text-on-surface/50 brand-font">HOME</p>
        <p class="text-xl text-on-surface/50 brand-font">TRACKS</p>
        <p class="text-xl text-on-surface/50 brand-font">REGISTRATION FEES</p>
    </div>
    <div class="absolute bottom-0">
        <Footer/>
    </div>
</div>