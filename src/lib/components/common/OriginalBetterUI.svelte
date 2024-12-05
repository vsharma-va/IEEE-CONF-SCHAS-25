<script>
    import {onMount} from "svelte";
    import Footer from "$lib/components/common/Footer.svelte";
    import Navbar from "$lib/components/common/Navbar.svelte";
    import {browser} from "$app/environment";

    let currentTime;
    let hideMobileNav;
    if (browser) {
        hideMobileNav = window.screen.width >= 820;
    }

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

    function handleResize(event) {
        if (event.isTrusted) {
            hideMobileNav = window.screen.width >= 820;
        }
    }

    $: reactiveTime = currentTime;
</script>

<svelte:window on:resize={handleResize}></svelte:window>

{#if !hideMobileNav}
    <Navbar/>
{/if}
<div class="flex flex-col w-full min-[820px]:flex-row">
    <div class="hidden flex-col h-screen w-[350px] min-[820px]:flex bg-surface sticky top-0">
        <div class="flex flex-col p-5 w-full">
            <div class="text-9xl font-bold brand-font text-on-surface/50 -ml-1 relative">
                MIT
                <div class="h-4 w-4 rounded-full bg-on-surface/50 absolute top-4 -right-6 animate-pulse">
                    <div class="h-1 w-1 rounded-full bg-surface absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>
            </div>
            <div class="flex flex-row items-stretch justify-between w-full">
                <p class="text-sm xl:text-lg brand-font text-on-surface">MANIPAL</p>
                <p class="text-sm xl:text-lg brand-font text-on-surface">//BENGALURU</p>
            </div>
            <div class="flex flex-row items-stretch justify-between w-full mt-5">
                <p class="text-sm xl:text-lg brand-font text-on-surface">ACADEMY</p>
                <p class="text-sm xl:text-lg brand-font text-on-surface">OF</p>
                <p class="text-sm xl:text-lg brand-font text-on-surface">HIGHER</p>
            </div>
            <div class="flex flex-row items-stretch justify-between w-full">
                <p class="text-sm xl:text-lg brand-font text-on-surface">EDUCATION.</p>
            </div>
            <div class="absolute bottom-0 flex flex-col gap-12">
                <div class="h-fit w-full flex flex-col gap-5">
                    <div class="flex flex-row gap-1 items-end">
                        <div class="h-4 w-2 rounded-sm bg-on-surface -ml-3"></div>
                        <button class="text-xl text-left xl:text-2xl text-on-surface/50 brand-font"><p class="leading-3 xl:leading-4">HOME</p></button>
                    </div>
                    <div class="flex flex-row gap-1 items-end">
                        <div class="h-4 w-2 rounded-sm bg-on-surface -ml-3"></div>
                        <button class="text-xl text-left xl:text-2xl text-on-surface/50 brand-font"><p class="leading-3 xl:leading-4">TRACKS</p></button>
                    </div>
                    <div class="flex flex-row gap-1 items-end">
                        <div class="h-4 w-2 rounded-sm bg-on-surface -ml-3"></div>
                        <button class="text-xl text-left xl:text-2xl text-on-surface/50 brand-font"><p class="leading-3 xl:leading-4">REGISTRATION FEES</p></button>
                    </div>
                </div>
                <Footer tighter="{true}"/>
            </div>
        </div>
    </div>
    <div class="h-full w-full flex flex-col items-center justify-center bg-surface">
        <div class="flex flex-col w-full max-w-[800px]">
            <div class="absolute top-5 left-5 min-[820px]:hidden">
                <p class="text-8xl -mt-4 font-bold brand-font text-on-surface/50">MIT</p>
            </div>
            <div class="h-fit min-h-screen w-full flex flex-col bg-surface">
                <div class="h-fit w-full px-5 flex flex-col mt-32 gap-5">
                    <p class="text-sm xl:text-lg brand-font text-on-surface/50">EVENT LOCATION?</p>
                    <div class="flex flex-col sm:flex-row sm:items-stretch sm:justify-between w-full">
                        <div class="flex flex-col">
                            <p class="text-sm xl:text-lg brand-font text-on-surface text-nowrap">MANIPAL INSTITUTE OF
                                TECHNOLOGY</p>
                            <p class="text-sm xl:text-lg brand-font text-primary mt-2">BENGALURU</p>
                            <p class="text-sm xl:text-lg brand-font text-primary uppercase">{reactiveTime}</p>
                        </div>
                        <div class="flex flex-row w-full max-w-[450px] gap-2 sm:items-end sm:justify-end sm:flex-col-reverse">
                            <button class="h-fit max-w-[225px] w-full px-2 py-1 mt-2 rounded-sm bg-on-surface text-surface brand-font text-[0.8rem] xl:text-[1rem]">
                                GET IN TOUCH
                            </button>
                            <button class="h-fit max-w-[225px] w-full px-2 py-1 mt-2 sm:mt-0 rounded-sm bg-on-surface text-surface brand-font text-[0.8rem] xl:text-[1rem]">
                                GET DIRECTIONS
                            </button>
                        </div>
                    </div>
                </div>
                <hr class="mt-16 bg-on-surface mx-5">
                <div class="h-fit w-full px-5 flex flex-col mt-16 gap-5">
                    <p class="text-sm xl:text-lg brand-font text-on-surface/50">EVENT NAME?</p>
                    <div class="flex flex-col sm:flex-row sm:items-stretch sm:justify-between w-full">
                        <div class="flex flex-col">
                            <p class="text-5xl xl:text-7xl brand-font text-on-surface">SCHAS</p>
                            <p class="text-sm xl:text-lg brand-font text-primary mt-2 text-left">Smart Cities,
                                Healthcare, and
                                Autonomous
                                Systems:
                                Paving the Way for Future Innovation
                                v2025</p>
                        </div>
                        <!--            update max-w-[450px] = sum of max-w of buttons-->
                        <div class="h-fit w-full max-w-[450px] sm:items-end sm:justify-start sm:flex-col flex flex-row gap-2">
                            <button class="h-fit w-full max-w-[225px] px-2 py-1 mt-2 rounded-sm bg-on-surface text-surface brand-font text-[0.8rem] xl:text-[1rem]">
                                TRACKS
                            </button>
                            <button class="h-fit w-full max-w-[225px] px-2 py-1 mt-2 rounded-sm bg-on-surface text-surface brand-font text-[0.8rem] xl:text-[1rem]">
                                REGISTRATION FEES
                            </button>
                        </div>
                    </div>
                </div>
                <hr class="mt-16 bg-on-surface mx-5">
                <div class="h-fit w-full px-5 flex flex-col mt-16 gap-5">
                    <p class="text-sm xl:text-lg brand-font text-on-surface/50">EVENT DATES?</p>
                    <ol class="list-decimal w-full px-10 space-y-2">
                        <li class="text-on-surface text-sm xl:text-lg brand-font w-full">
                            <div class="w-full flex flex-col justify-between">
                                <p class="text-gradient-primary">CALL FOR PAPER</p>
                                <p class="text-primary self-end">01/05/2025</p>
                            </div>
                        </li>
                        <li class="text-on-surface text-sm xl:text-lg brand-font w-full">
                            <div class="w-full flex flex-col justify-between">
                                <p class="text-gradient-primary">NOTIFICATION OF ACCEPTANCE</p>
                                <p class="text-primary self-end">30/07/2025</p>
                            </div>
                        </li>
                        <li class="text-on-surface text-sm xl:text-lg brand-font w-full">
                            <div class="w-full flex flex-col justify-between">
                                <p class="text-gradient-primary">CAMERA READY SUBMISSION</p>
                                <p class="text-primary self-end">20/08/2025</p>
                            </div>
                        </li>
                        <li class="text-on-surface text-sm xl:text-lg brand-font w-full">
                            <div class="w-full flex flex-col justify-between">
                                <p class="text-gradient-primary">DATE OF REGISTRATION</p>
                                <p class="text-primary self-end">01/09/2025</p>
                            </div>
                        </li>
                        <li class="text-on-surface text-sm xl:text-lg brand-font w-full">
                            <div class="w-full flex flex-col justify-between">
                                <p class="text-gradient-primary">CONFERENCE DATE</p>
                                <p class="text-primary self-end">11/12/2025</p>
                            </div>
                        </li>
                    </ol>
                </div>
                <hr class="mt-16 bg-on-surface mx-5">
                <div class="h-fit w-full px-5 flex flex-col mt-16 gap-5">
                    <p class="text-sm xl:text-lg brand-font text-on-surface/50">ABOUT EVENT?</p>
                    <p class="text-on-surface text-sm xl:text-lg brand-font">Welcome to Smart Cities, Healthcare, and
                        Autonomous
                        Systems
                        (SCHAS) 2025, a transformative conference designed to explore the future of technology in urban
                        development,
                        healthcare, and autonomous systems. Our mission is to bring together thought leaders,
                        innovators,
                        and
                        experts from diverse fields to share insights, discuss cutting-edge research, and collaborate on
                        sustainable
                        solutions that shape the cities of tomorrow.
                        As we stand on the brink of a new era of technological advancements, SCHAS 2025 focuses on how
                        smart
                        cities,
                        advanced healthcare solutions, and autonomous systems can work synergistically to improve the
                        quality of
                        life, streamline services, and drive economic growth. With a focus on innovation and practical
                        implementation, this conference aims to foster cross-disciplinary collaboration to solve some of
                        the
                        most
                        pressing challenges facing society today.
                        Whether you're a researcher, a policy maker, a tech enthusiast, or an industry professional,
                        SCHAS
                        2025
                        is
                        the ideal platform for discussing emerging technologies and exploring their potential to create
                        sustainable,
                        inclusive, and intelligent solutions for the future.
                        Join us as we pave the way for the next generation of innovation in smart cities, healthcare,
                        and
                        autonomous
                        systems. Together, we can transform our world for the better.
                    </p>
                </div>
                <hr class="mt-16 bg-on-surface mx-5">

                <div class="h-fit w-full px-5 flex flex-col mt-16 gap-5">
                    <p class="text-sm xl:text-lg brand-font text-on-surface/50">ABOUT US?</p>
                    <p class="text-sm xl:text-lg brand-font text-on-surface">
                        The Garden City of India, <b>Bengaluru,</b> is now home to a new engineering institution, “<b>Manipal
                        Institute of Technology, Bengaluru</b>”, the latest constituent unit of Manipal Academy of
                        Higher
                        Education
                        (MAHE).&nbsp;<span
                            style="font-style: inherit; font-weight: inherit; color: var( --e-global-color-astglobalcolor4 ); background-color: var( --e-global-color-astglobalcolor0 );">MAHE is recognized as a deemed-to-be university since 1993 and has been accorded the status of Institute of Eminence (IoE) by MHRD, Government of India. Over the years, MAHE has transformed itself into a centre of excellence that offers knowledge to about 33000+ students from 67+ nations, ably supported by 2500 faculty and almost 10000 support and service staff.</span>
                    </p>
                </div>
                <hr class="mt-16 bg-on-surface mx-5">
                <Footer/>
            </div>
        </div>
    </div>
</div>


<!--<script>-->
<!--    import {onMount} from "svelte";-->
<!--    import {gsap} from "gsap";-->
<!--    import {TextPlugin} from "gsap/dist/TextPlugin";-->
<!--    import Footer from "$lib/components/common/Footer.svelte";-->

<!--    let currentTime;-->
<!--    let speakersLength = 1;-->

<!--    let currentIndex = {-->
<!--        'cultural': 0,-->
<!--        'sports': 0,-->
<!--        'esports': 0,-->
<!--    };-->
<!--    let carouselStatus = {-->
<!--        'cultural': false,-->
<!--        'sports': false,-->
<!--        'esports': false,-->
<!--    };-->
<!--    let animationPlaying = false;-->

<!--    onMount(() => {-->
<!--        gsap.registerPlugin(TextPlugin);-->
<!--        let onLoadTimeline = gsap.timeline({-->
<!--            onComplete: () => {-->
<!--                openTickets('cultural');-->
<!--            }-->
<!--        });-->
<!--        // onLoadTimeline.pause();-->
<!--        onLoadTimeline.to('.main-page-heading', {-->
<!--            translateY: 0,-->
<!--            translateX: 0,-->
<!--            rotate: 0,-->
<!--            stagger: 0.1,-->
<!--            ease: 'power4.out',-->
<!--        });-->
<!--        onLoadTimeline.to('.cultural-pass-text-main', {-->
<!--            text: 'Cultural',-->
<!--            delay: '0.5'-->
<!--        }, '<');-->
<!--        onLoadTimeline.to('.sports-pass-text-main', {-->
<!--            text: 'Sports',-->
<!--        }, '<');-->
<!--        onLoadTimeline.to('.esports-pass-text-main', {-->
<!--            text: 'E-Sports',-->
<!--        }, '<');-->
<!--        onLoadTimeline.to('.cultural-ticket-div', {-->
<!--            translateY: 0,-->
<!--            rotate: 0,-->
<!--            delay: 1.25,-->
<!--            ease: 'sine',-->
<!--        }, '<');-->
<!--        for (let i = 0; i <= speakersLength; i++) {-->
<!--            onLoadTimeline.to(`.cultural-carousel-${i + 1}`, {-->
<!--                translateX: `${12 * i}%`,-->
<!--                translateZ: `${-8 * i}em`,-->
<!--            }, '<');-->
<!--        }-->
<!--        onLoadTimeline.to('.cultural-controller-left', {-->
<!--            translateX: 0,-->
<!--        }, "<");-->
<!--        onLoadTimeline.to('.cultural-controller-right', {-->
<!--            translateX: 0,-->
<!--        }, "<");-->

<!--        setInterval(() => {-->
<!--            let date = new Date();-->
<!--            const options = {-->
<!--                month: 'short',-->
<!--                day: 'numeric',-->
<!--                hour: '2-digit',-->
<!--                minute: '2-digit',-->
<!--                hour12: true // Use 24-hour time format-->
<!--            };-->
<!--            currentTime = new Intl.DateTimeFormat('en-US', options).format(date);-->
<!--        }, 1000);-->
<!--    })-->

<!--    function getTranslatePercentage(element) {-->
<!--        const transformValue = window.getComputedStyle(element[0]).transform;-->
<!--        const w = window.getComputedStyle(element[0]).width;-->
<!--        const h = window.getComputedStyle(element[0]).height;-->
<!--        var matrix = new WebKitCSSMatrix(transformValue);-->

<!--        const style = window.getComputedStyle(element[0]);-->
<!--        const rotationMatrix = style.transform || style.webkitTransform || style.mozTransform;-->

<!--        let angle;-->
<!--        if (rotationMatrix === 'none') {-->
<!--            angle = 0;-->
<!--        } else {-->
<!--            const values = rotationMatrix.split('(')[1].split(')')[0].split(',');-->
<!--            const a = values[0];-->
<!--            const b = values[1];-->
<!--            angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));-->
<!--        }-->

<!--        return {-->
<!--            x: matrix.m41 / parseInt(w) * 100,-->
<!--            y: matrix.m42 / parseInt(h) * 100,-->
<!--            rotation: angle,-->
<!--        };-->
<!--    }-->

<!--    function slideRight(prefix) {-->
<!--        if (!animationPlaying && carouselStatus[prefix]) {-->
<!--            if (currentIndex[prefix] !== speakersLength) {-->
<!--                let slideRightTimeline = gsap.timeline({-->
<!--                    onComplete: () => {-->
<!--                        animationPlaying = false;-->
<!--                    }-->
<!--                });-->
<!--                animationPlaying = true;-->
<!--                for (let i = 0; i <= speakersLength; i++) {-->
<!--                    console.log(document.getElementsByClassName(`${prefix}-carousel-${i + 1}`));-->
<!--                    let translateValues = getTranslatePercentage(document.getElementsByClassName(`${prefix}-carousel-${i + 1}`));-->
<!--                    console.log(translateValues);-->
<!--                    slideRightTimeline.to(`.${prefix}-carousel-${i + 1}`, {-->
<!--                        translateX: `${translateValues.x + 80}%`,-->
<!--                        translateY: `${translateValues.y + 20}%`,-->
<!--                        rotate: `${translateValues.rotation + 20}deg`,-->
<!--                        ease: 'sine',-->
<!--                    }, '<');-->
<!--                }-->
<!--                currentIndex[prefix]++;-->
<!--            }-->
<!--        }-->
<!--    }-->

<!--    function slideLeft(prefix) {-->
<!--        if (!animationPlaying) {-->
<!--            if (currentIndex[prefix] !== 0) {-->
<!--                let slideLeftTimeline = gsap.timeline({-->
<!--                    onComplete: () => {-->
<!--                        animationPlaying = false;-->
<!--                    }-->
<!--                });-->
<!--                animationPlaying = true;-->
<!--                for (let i = 0; i <= speakersLength; i++) {-->
<!--                    let translateValues = getTranslatePercentage(document.getElementsByClassName(`${prefix}-carousel-${i + 1}`));-->
<!--                    console.log(translateValues);-->
<!--                    slideLeftTimeline.to(`.${prefix}-carousel-${i + 1}`, {-->
<!--                        translateX: `${translateValues.x - 80}%`,-->
<!--                        translateY: `${translateValues.y - 20}%`,-->
<!--                        rotate: `${translateValues.rotation - 20}deg`,-->
<!--                        ease: 'sine',-->
<!--                    }, '<');-->
<!--                }-->
<!--                currentIndex[prefix]&#45;&#45;;-->
<!--            }-->
<!--        }-->
<!--    }-->

<!--    export function openTickets(prefix) {-->
<!--        carouselStatus[prefix] = true;-->
<!--        let ticketTimeline = gsap.timeline();-->
<!--        for (let i = 2; i <= speakersLength + 1; i++) {-->
<!--            ticketTimeline.to(`.${prefix}-carousel-${i}`, {-->
<!--                translateX: `${-80 * (i - 1)}%`,-->
<!--                translateY: `${-20 * (i - 1)}%`,-->
<!--                translateZ: 0,-->
<!--                rotate: `${-20 * (i - 1)}deg`,-->
<!--                ease: 'sine',-->
<!--            }, '<+=0.1');-->
<!--        }-->
<!--    }-->

<!--    $: reactiveTime = currentTime;-->
<!--</script>-->

<!--<div class="h-fit min-h-screen w-full bg-surface flex flex-col items-center justify-center relative">-->
<!--    <div class="absolute top-5 left-5 w-[70%] flex flex-col gap-5">-->
<!--        <p class="text-lg font-thin text-on-surface primary-font">International Conference on Next Generation-->
<!--            Communication-->
<!--            and-->
<!--            Information Processing-->
<!--        </p>-->
<!--        <div class="h-fit w-fit flex-flex-col">-->
<!--            <p class="text-sm xl:text-lg text-on-surface brand-font">-->
<!--                Get In Touch-->
<!--            </p>-->
<!--            <p class="text-sm xl:text-lg font-thin text-on-surface brand-font">-->
<!--                {reactiveTime}-->
<!--            </p>-->
<!--            <p class="text-sm xl:text-lg font-thin text-on-surface brand-font">-->
<!--            </p>-->
<!--        </div>-->
<!--    </div>-->
<!--    <div class="absolute top-5 right-5 w-[30%] flex flex-col items-end">-->
<!--        <button class="bg-on-primary-container rounded-xl h-5 w-10"></button>-->
<!--    </div>-->
<!--    <div class="h-fit min-h-fit w-full relative flex flex-col items-center justify-center gap-3 p-5">-->
<!--        <div class="h-[300px] w-full spacer"></div>-->
<!--        <p class="text-8xl text-on-surface brand-font">INCIP</p>-->
<!--        <div class="h-[350px] w-full bg-primary-container rounded-2xl"></div>-->
<!--    </div>-->
<!--    <div class="h-0 w-full mt-6 border 2 border-on-surface border-dotted relative">-->
<!--        <div class="absolute -top-1 -left-1 h-2 w-2 bg-blue-700"></div>-->
<!--        <div class="absolute -top-1 -right-1 h-2 w-2 bg-blue-700"></div>-->
<!--    </div>-->
<!--    <div class="h-fit w-full flex flex-col mt-6 gap-3 overflow-hidden relative p-5">-->
<!--        <div class="flex flex-row gap-1 overflow-hidden">-->
<!--            <p class="text-on-surface primary-font self-start text-4xl">Important Dates</p>-->
<!--            <p class="text-on-surface/70 primary-font text-lg" style="vertical-align: super">(1)</p>-->
<!--        </div>-->
<!--        <div class="h-fit w-full bg-primary-container flex flex-row items-center justify-between rounded-2xl py-4 shadow-lg">-->
<!--            <div class="w-1/4 h-fit flex flex-col items-start justify-center px-4">-->
<!--                <p class="text-on-primary-container primary-font text-sm xl:text-lg mb-2">Tuesday</p>-->
<!--                <p class="text-on-primary-container primary-font text-3xl font-bold leading-8">13</p>-->
<!--                <p class="text-on-primary-container primary-font text-3xl font-bold leading-8">DEC</p>-->
<!--            </div>-->
<!--            <div class="w-full h-fit flex flex-col items-end justify-center px-4">-->
<!--                <p class="text-on-primary-container primary-font text-2xl font-bold leading-8 text-center">Paper-->
<!--                    Submission</p>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="h-fit w-full bg-tertiary-container flex flex-row items-center justify-between rounded-2xl py-4 shadow-lg">-->
<!--            <div class="w-1/4 h-fit flex flex-col items-start justify-center px-4">-->
<!--                <p class="text-on-tertiary-container primary-font text-sm xl:text-lg mb-2">Tuesday</p>-->
<!--                <p class="text-on-tertiary-container primary-font text-3xl font-bold leading-8">18</p>-->
<!--                <p class="text-on-tertiary-container primary-font text-3xl font-bold leading-8">DEC</p>-->
<!--            </div>-->
<!--            <div class="w-full h-fit flex flex-col items-end justify-center px-4">-->
<!--                <p class="text-on-tertiary-container primary-font text-2xl font-bold leading-8 text-center">Paper-->
<!--                    Acceptance</p>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="h-fit w-full bg-secondary-container flex flex-row items-center justify-between rounded-2xl py-4 shadow-lg">-->
<!--            <div class="w-1/4 h-fit flex flex-col items-start justify-center px-4">-->
<!--                <p class="text-on-secondary-container primary-font text-sm xl:text-lg mb-2">Tuesday</p>-->
<!--                <p class="text-on-secondary-container primary-font text-3xl font-bold leading-8">21</p>-->
<!--                <p class="text-on-secondary-container primary-font text-3xl font-bold leading-8">DEC</p>-->
<!--            </div>-->
<!--            <div class="w-full h-fit flex flex-col items-end justify-center px-4">-->
<!--                <p class="text-on-secondary-container primary-font text-2xl font-bold leading-8 text-center">-->
<!--                    Registration</p>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="h-fit w-full bg-primary flex flex-row items-center justify-between rounded-2xl py-4 shadow-lg">-->
<!--            <div class="w-1/4 h-fit flex flex-col items-start justify-center px-4">-->
<!--                <p class="text-on-primary primary-font text-sm xl:text-lg mb-2">Tuesday</p>-->
<!--                <p class="text-on-primary primary-font text-3xl font-bold leading-8">25</p>-->
<!--                <p class="text-on-primary primary-font text-3xl font-bold leading-8">DEC</p>-->
<!--            </div>-->
<!--            <div class="w-full h-fit flex flex-col items-end justify-center px-4">-->
<!--                <p class="text-on-primary primary-font text-2xl font-bold leading-8 text-center">Conference</p>-->
<!--            </div>-->
<!--        </div>-->
<!--        &lt;!&ndash;        <div class="h-fit w-full bg-primary-container flex flex-col py-5 px-3 rounded-2xl gap-5">&ndash;&gt;-->
<!--        &lt;!&ndash;            <div class="h-fit w-fit">&ndash;&gt;-->
<!--        &lt;!&ndash;                <p class="text-on-surface primary-font font-bold text-lg">1</p>&ndash;&gt;-->
<!--        &lt;!&ndash;            </div>&ndash;&gt;-->
<!--        &lt;!&ndash;            <div class="flex flex-row w-full">&ndash;&gt;-->
<!--        &lt;!&ndash;                <div class="flex flex-col w-1/2 items-start justify-center">&ndash;&gt;-->
<!--        &lt;!&ndash;                    <p class="text-surface primary-font leading-6 font-bold text-2xl">NOV</p>&ndash;&gt;-->
<!--        &lt;!&ndash;                    <p class="text-surface primary-font leading-6 font-bold text-2xl">2024</p>&ndash;&gt;-->
<!--        &lt;!&ndash;                </div>&ndash;&gt;-->
<!--        &lt;!&ndash;                <div class="flex flex-col w-1/2 items-end justify-center">&ndash;&gt;-->
<!--        &lt;!&ndash;                    <p class="text-surface primary-font leading-7 font-bold text-6xl">23</p>&ndash;&gt;-->
<!--        &lt;!&ndash;                </div>&ndash;&gt;-->
<!--        &lt;!&ndash;            </div>&ndash;&gt;-->
<!--        &lt;!&ndash;            <div class="h-2 w-full bg-surface"></div>&ndash;&gt;-->
<!--        &lt;!&ndash;            <div class="flex flex-col w-full items-center justify-center gap-3">&ndash;&gt;-->
<!--        &lt;!&ndash;                <p class="text-surface primary-font font-bold text-2xl">Paper Submission</p>&ndash;&gt;-->
<!--        &lt;!&ndash;                <button class="w-full bg-surface text-white primary-font text-lg rounded-lg py-1">Submit Paper</button>&ndash;&gt;-->
<!--        &lt;!&ndash;            </div>&ndash;&gt;-->
<!--        &lt;!&ndash;        </div>&ndash;&gt;-->
<!--        &lt;!&ndash;        <div class="absolute h-[300px] w-full -right-[20%] bg-blue-500 rounded-2xl"></div>&ndash;&gt;-->
<!--        &lt;!&ndash;        <div class="absolute h-[300px] w-full top-12 -left-[60%] bg-blue-300 rounded-2xl flex flex-col items-end justify-start pr-5">&ndash;&gt;-->
<!--        &lt;!&ndash;            <p class="text-xl brand-font text-surface">Bengaluru</p>&ndash;&gt;-->
<!--        &lt;!&ndash;        </div>&ndash;&gt;-->
<!--    </div>-->
<!--    <div class="h-0 w-full mt-6 border 2 border-on-surface border-dotted relative">-->
<!--        <div class="absolute -top-1 -left-1 h-2 w-2 bg-blue-700"></div>-->
<!--        <div class="absolute -top-1 -right-1 h-2 w-2 bg-blue-700"></div>-->
<!--    </div>-->
<!--    <div class="h-fit w-full flex flex-col mt-6 gap-3 overflow-hidden relative p-5">-->
<!--        <div class="flex flex-row gap-1 overflow-hidden">-->
<!--            <p class="text-on-surface primary-font self-start text-4xl">Speakers</p>-->
<!--            <p class="text-on-surface/70 primary-font text-lg" style="vertical-align: super">(2)</p>-->
<!--        </div>-->
<!--        <div class="h-[60vh] w-full flex flex-col items-center justify-center relative cultural-tickets"-->
<!--             style="perspective: 800px">-->
<!--            <div class="w-full p-0 lg:p-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[25] flex items-center justify-between">-->
<!--                <button class="h-8 w-8 rounded-full bg-white backdrop-blur-xl -translate-x-[100%] cultural-controller-left flex items-center justify-center"-->
<!--                        on:click={() => {slideRight('cultural')}}>-->
<!--                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">-->
<!--                        <g>-->
<!--                            <path d="M12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,12,20Z"/>-->
<!--                            <polygon-->
<!--                                    points="12.707 8.707 11.293 7.293 6.586 12 11.293 16.707 12.707 15.293 10.414 13 16 13 16 11 10.414 11 12.707 8.707"/>-->
<!--                        </g>-->
<!--                    </svg>-->
<!--                </button>-->
<!--                <button class="h-8 w-8 rounded-full bg-white backdrop-blur-xl translate-x-[100%] cultural-controller-right flex items-center justify-center"-->
<!--                        on:click={() => {slideLeft('cultural')}}>-->
<!--                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">-->
<!--                        <g>-->
<!--                            <path d="M12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,12,20Z"/>-->
<!--                            <polygon-->
<!--                                    points="11.293 8.707 13.586 11 8 11 8 13 13.586 13 11.293 15.293 12.707 16.707 17.414 12 12.707 7.293 11.293 8.707"/>-->
<!--                        </g>-->
<!--                    </svg>-->
<!--                </button>-->
<!--            </div>-->
<!--            <div class="h-fit w-fit cultural-heading-ticket cultural-ticket-div absolute cultural-carousel-1 origin-bottom-left -translate-y-[100%]"-->
<!--                 style="z-index: {speakersLength + 2};">-->
<!--                <div class="w-[250px] h-[300px] sm:w-[325px] sm:h-[350px] relative border-2 border-blue-100 shadow-2xl flex-shrink-0 rounded-2xl">-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="h-fit w-fit cultural-content-ticket cultural-ticket-div absolute cultural-carousel-{2} origin-bottom-left -translate-y-[100%]">-->
<!--                <div class="w-[250px] h-[300px] sm:w-[325px] sm:h-[350px] relative border-2 border-blue-100 shadow-2xl flex-shrink-0 rounded-2xl">-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--    <div class="h-0 w-full mt-6 border 2 border-on-surface border-dotted relative">-->
<!--        <div class="absolute -top-1 -left-1 h-2 w-2 bg-blue-700"></div>-->
<!--        <div class="absolute -top-1 -right-1 h-2 w-2 bg-blue-700"></div>-->
<!--    </div>-->
<!--    <div class="h-fit w-full flex flex-col mt-6 p-5">-->
<!--        <div class="flex flex-row gap-1 overflow-hidden">-->
<!--            <p class="text-on-surface primary-font self-start text-4xl">About Organiser</p>-->
<!--            <p class="text-on-surface/70 primary-font text-lg" style="vertical-align: super">(3)</p>-->
<!--        </div>-->
<!--        <p class="text-on-surface brand-font self-start text-sm xl:text-lg pt-4">-->
<!--            The Garden City of India, <b>Bengaluru,</b> is now home to a new engineering institution, “<b>Manipal-->
<!--            Institute of Technology, Bengaluru</b>”, the latest constituent unit of Manipal Academy of Higher Education-->
<!--            (MAHE).&nbsp;<span-->
<!--                style="font-style: inherit; font-weight: inherit; color: var( &#45;&#45;e-global-color-astglobalcolor4 ); background-color: var( &#45;&#45;e-global-color-astglobalcolor0 );">MAHE is recognized as a deemed-to-be university since 1993 and has been accorded the status of Institute of Eminence (IoE) by MHRD, Government of India. Over the years, MAHE has transformed itself into a centre of excellence that offers knowledge to about 33000+ students from 67+ nations, ably supported by 2500 faculty and almost 10000 support and service staff.</span>-->
<!--        </p>-->
<!--        <button class="w-fit h-fit bg-on-surface text-surface px-3 py-2 text-sm xl:text-lg primary-font mt-3 rounded-2xl">-->
<!--            Get Directions-->
<!--        </button>-->
<!--    </div>-->

<!--    <div class="h-0 w-full mt-6 border 2 border-on-surface border-dotted relative">-->
<!--        <div class="absolute -top-1 -left-1 h-2 w-2 bg-blue-700"></div>-->
<!--        <div class="absolute -top-1 -right-1 h-2 w-2 bg-blue-700"></div>-->
<!--    </div>-->
<!--    <div class="h-fit w-full flex flex-col mt-6 p-5">-->
<!--        <div class="flex flex-row gap-1 overflow-hidden">-->
<!--            <p class="text-on-surface primary-font self-start text-4xl">Our Sponsors</p>-->
<!--            <p class="text-on-surface/70 primary-font text-lg" style="vertical-align: super">(4)</p>-->
<!--        </div>-->
<!--        <div class="h-fit w-full p-6 mt-5 border-dotted border-on-surface border-[1px]">-->
<!--            <div class="h-[150px] w-full bg-primary-container rounded-2xl"></div>-->
<!--        </div>-->
<!--        <div class="h-fit w-full p-6 border-dotted border-on-surface border-[1px]">-->
<!--            <div class="h-[150px] w-full bg-tertiary-container rounded-2xl"></div>-->
<!--        </div>-->
<!--    </div>-->
<!--    <div class="h-fit w-full p-5">-->
<!--        <Footer/>-->
<!--    </div>-->
<!--</div>-->
<style>
    /* Primary Gradient - for most important dates */
    .text-gradient-primary {
        @apply bg-gradient-to-r from-on-primary-container via-primary to-on-primary-container bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient;
    }

    /* Secondary Gradient - for registration deadlines */
    .text-gradient-secondary {
        @apply bg-gradient-to-r from-on-secondary-container via-secondary to-on-secondary-container bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient;
    }

    /* Tertiary Gradient - for informational dates */
    .text-gradient-tertiary {
        @apply bg-gradient-to-r from-on-tertiary-container via-tertiary-container to-on-tertiary-container bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient;
    }

    /* Subtle Gradient - for less important dates */
    .text-gradient-subtle {
        @apply bg-gradient-to-r from-on-surface via-secondary to-on-surface bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    .animate-gradient {
        animation: gradient 8s ease infinite;
    }
</style>