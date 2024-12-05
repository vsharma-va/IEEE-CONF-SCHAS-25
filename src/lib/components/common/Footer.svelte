<script>
    import {onMount} from "svelte";
    import Waves from "$lib/components/common/Waves.svelte";

    let currentTime;

    onMount(() => {
        setInterval(() => {
            let date = new Date();
            const options = {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true // Use 24-hour time format
            };
            currentTime = new Intl.DateTimeFormat('en-US', options).format(date);
        }, 1000);
    })

    export let tighter = false;

    $: reactiveTime = currentTime;
</script>
{#if !tighter}
    <div class="h-fit w-full flex flex-col px-5 mt-20 items-center justify-center relative">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            <Waves/>
        </div>
        <p class="text-sm brand-font text-on-surface/50 uppercase">#a8c8ff</p>
        <p class="text-sm brand-font text-on-surface/50 uppercase mt-3 mb-3">{reactiveTime}</p>
        <p class="text-sm brand-font text-on-surface/50 uppercase">TWITTER</p>
        <p class="text-sm brand-font text-on-surface/50 uppercase">LINKEDIN</p>
        <p class="text-sm brand-font text-on-surface/50 uppercase">HELLO@MANIPAL.EDU</p>
        <div class="flex flex-row flex-wrap flex-shrink-0 gap-5">
            <div class="flex flex-col">
                <p class="text-sm brand-font text-primary/80 uppercase mt-3">VAIBHAV SHARMA</p>
                <p class="text-sm brand-font text-primary/80 uppercase">+919860285402</p>
            </div>
            <div class="flex flex-col">
                <p class="text-sm brand-font text-primary/80 uppercase mt-3">YASH SHARMA</p>
                <p class="text-sm brand-font text-primary/80 uppercase">+919860285402</p>
            </div>
        </div>
        <p class="text-lg brand-font text-on-surface/50 mt-3 mb-5">SCHAP v2025 @ MIT, BENGALURU</p>
    </div>
{:else}
    <div class="h-fit w-full flex flex-col">
        <p class="text-sm brand-font text-on-surface/50 uppercase">#a8c8ff</p>
        <p class="text-sm brand-font text-on-surface/50 uppercase mt-3 mb-3">{reactiveTime}</p>
        <p class="text-sm brand-font text-on-surface/50 uppercase">TWITTER</p>
        <p class="text-sm brand-font text-on-surface/50 uppercase">LINKEDIN</p>
        <p class="text-sm brand-font text-on-surface/50 uppercase">HELLO@MANIPAL.EDU</p>
        <div class="flex flex-row flex-wrap flex-shrink-0 gap-2">
            <div class="flex flex-col">
                <p class="text-sm brand-font text-primary/80 uppercase mt-3">VAIBHAV SHARMA</p>
                <p class="text-sm brand-font text-primary/80 uppercase">+919860285402</p>
            </div>
            <div class="flex flex-col">
                <p class="text-sm brand-font text-primary/80 uppercase mt-3">YASH SHARMA</p>
                <p class="text-sm brand-font text-primary/80 uppercase">+919860285402</p>
            </div>
        </div>
        <p class="text-lg brand-font text-on-surface/50 mt-3 mb-5">SCHAP v2025 @ MIT, BENGALURU</p>
    </div>
{/if}