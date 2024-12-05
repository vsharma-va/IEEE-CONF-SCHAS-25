<script>
    import {onDestroy, onMount} from "svelte";
    import {gsap} from "gsap/dist/gsap";
    import mitb from "$lib/assets/images/mitb.webp";
    import mitb4 from "$lib/assets/images/mitb-4.jpg";
    import mitb6 from "$lib/assets/images/mitb-6.png";
    import mitb5 from "$lib/assets/images/mitb-5..jpg";
    import ieeeXploreLogo from "$lib/assets/images/IEEE-XploreDigitalLibrary.webp";
    import ieeeLogo from "$lib/assets/images/ieee_logo.png";
    import ieeeCisLogo from "$lib/assets/images/ieee_cis_logo.jpg";
    import manipalLogo from "$lib/assets/images/manipal_logo.png";
    import Waves from "$lib/components/common/Waves.svelte";
    import Navbar from "$lib/components/common/Navbar.svelte";
    import FrostyGradient from "$lib/components/common/FrostyGradient.svelte";

    let currentGalleryIndex = [0, 1, 2, 3, 4];
    let imageArray = [mitb, mitb4, mitb6, mitb5];
    let galleryLength = 5;
    let galleryInterval;

    onMount(() => {
        galleryInterval = setInterval(() => {
            cycleThroughGallery();
        }, 9000)
    })

    onDestroy(() => {
        clearInterval(galleryInterval);
    })

    function cycleThroughGallery() {
        let currentElement = document.getElementsByClassName(`photo-gallery-${0}`);
        let newPosition = galleryLength - 1;
        let moveToLastTimeline = gsap.timeline();
        // GO TO LAST POSITION
        moveToLastTimeline.to(currentElement, {
            translateX: '-150px',
            rotate: 0,
            ease: 'sine',
        });
        moveToLastTimeline.to(currentElement, {
            translateX: 0,
            rotate: `${newPosition * 5}deg`,
            opacity: `${1 - (newPosition * 2) / 10}`,
            ease: 'sine',
            onComplete: () => {
                let newGalleryIndex = currentGalleryIndex.slice();
                for (let i = 0; i < newGalleryIndex.length; i++) {
                    let updatedIndex = newGalleryIndex[i] - 1;
                    if (updatedIndex < 0) {
                        newGalleryIndex[i] = galleryLength - 1;
                    } else {
                        newGalleryIndex[i] = updatedIndex;
                    }
                }

                // console.log(newGalleryIndex);
                // console.log(currentGalleryIndex);

                let allElements = document.getElementsByClassName('gallery');
                // allElements
                let counter = 0;
                for (let element of allElements) {
                    element.classList.replace(`photo-gallery-${currentGalleryIndex[counter]}`, `photo-gallery-${newGalleryIndex[counter]}`);
                    element.style.zIndex = `${galleryLength - newGalleryIndex[counter]}`
                    counter++;
                }
                currentGalleryIndex = newGalleryIndex;
            }
        });
        // MOVE SECOND TO FIRST AND REST TO FOLLOW
        for (let i = 1; i < galleryLength; i++) {
            moveToLastTimeline.to(`.photo-gallery-${i}`, {
                rotate: `${(i - 1) * 5}deg`,
                opacity: `${1 - ((i - 1) * 2) / 10}`,
                ease: 'sine',
            }, '<+0.1');
        }
    }
</script>

<div class="h-screen w-full fixed top-0">
    <FrostyGradient/>
</div>
<Navbar/>
<div class="min-h-screen h-fit w-full bg-surface flex flex-col gap-24">
    <div class="h-screen w-full bg-surface flex flex-col items-center justify-center">
        <div class="w-full h-full flex md:flex-row flex-col items-center justify-center md:justify-between relative">
            <div class="flex w-full flex-col items-center justify-center md:justify-start lg:items-end lg:pr-48 md:h-[300px]">
                <div class="h-fit w-fit flex flex-col items-center justify-center">
                    <p class="text-lg text-center text-on-surface/70 lg:text-surface lg:mix-blend-difference lg:z-[8] regular-font pb-5 2xl:text-xl">
                        11<span
                            style="vertical-align: super">th</span> + 12<span style="vertical-align: super">th</span>
                        <br class="hidden md:block lg:hidden">
                        December
                    </p>
                    <p class="text-8xl text-surface brand-font leading-[0.5] z-[8] mix-blend-difference lg:text-9xl lg:leading-[0.5] 2xl:text-[9rem]">
                        SCHAP</p>
                </div>
            </div>
            <div class="absolute top-1/2 md:flex hidden left-1/2 -translate-y-1/2 -translate-x-1/2 h-[200px] w-full">
                <Waves/>
            </div>
            <div class="h-[300px] sm:h-[350px] lg:h-[400px] xl:h-[400px] 2xl:h-[450px] w-full  items-center justify-center flex flex-col relative px-5 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
                 style="perspective: 800px">
                <div class="absolute top-1/2 md:hidden flex left-1/2 -translate-y-1/2 -translate-x-1/2 h-[200px] w-full">
                    <Waves/>
                </div>
                <p class="text-6xl text-surface brand-font mix-blend-difference z-[8]">v2025</p>
                {#each {length: 5} as _, index}
                    <div class="h-full w-[200px] sm:w-[250px] lg:w-[300px] bg-primary rounded-lg absolute gallery photo-gallery-{index}"
                         style="rotate: {index * 5}deg; opacity: {1 - (index * 2) / 10}; z-index: {galleryLength - index}">
                        <img src="{imageArray[index]}" alt="showcase images for MITB"
                             class="object-cover h-full w-full rounded-lg">
                    </div>
                {/each}
            </div>
            <div class="flex w-full flex-col items-center justify-center md:justify-start lg:items-start lg:pl-24 md:h-[300px] md:flex-col-reverse">
                <div class="flex flex-col md:flex-col-reverse h-fit w-fit lg:flex-col-reverse items-center justify-center">
                    <p class="text-8xl text-surface brand-font leading-[0.5] z-[8] mix-blend-difference lg:text-9xl lg:leading-[0.5] 2xl:text-[9rem]">
                        CONFERENCE</p>
                    <p class="text-lg text-center text-on-surface/70 regular-font md:text-surface md:z-[8] md:mix-blend-difference pt-5 md:pt-0 md:pb-5 px-5 lg:px-0 2xl:text-xl">
                        Manipal Institute
                        Of Technology<br class="hidden md:block lg:hidden">
                        Bengaluru</p>
                </div>
            </div>
        </div>
        <p class="text-lg md:text-xl text-center text-on-surface/70 regular-font pt-6 mb-5 max-w-[525px] lg:text-2xl">
            International Conference On
            Smart
            Cities, Healthcare, and Autonomous
            Systems: Paving the Way for Future Innovation</p>
    </div>
    <div class="h-fit w-full flex flex-row items-start justify-start lg:justify-center relative gap-3">
        <p class="text-7xl brand-font text-on-surface self-start rotate-180 sticky top-5"
           style="writing-mode: vertical-lr">
            Important
            Dates</p>
        <div class="w-fit min-w-[850px] h-full flex flex-col items-start justify-start gap-3">
            <div class="flex flex-col">
                <p class="text-lg lg:text-xl regular-font text-on-surface/50">1st May 2025</p>
                <p class="text-xl lg:text-2xl regular-font text-on-surface/70">Call For Paper</p>
            </div>
            <div class="flex flex-col">
                <p class="text-lg lg:text-xl regular-font text-on-surface/50">1st June 2025</p>
                <p class="text-xl lg:text-2xl regular-font text-on-surface/70">Paper Submission Deadline</p>
            </div>
            <div class="flex flex-col">
                <p class="text-lg lg:text-xl regular-font text-on-surface/50">30th July 2025</p>
                <p class="text-xl lg:text-2xl regular-font text-on-surface/70">Notification Of Acceptance</p>
            </div>
            <div class="flex flex-col">
                <p class="text-lg lg:text-xl regular-font text-on-surface/50">20th August 2025</p>
                <p class="text-xl lg:text-2xl regular-font text-on-surface/70">Camera Ready Submission</p>
            </div>
            <div class="flex flex-col">
                <p class="text-lg lg:text-xl regular-font text-on-surface/50">1st June 2025</p>
                <p class="text-xl lg:text-2xl regular-font text-on-surface/70">Paper Submission Deadline</p>
            </div>
            <div class="flex flex-col">
                <p class="text-lg lg:text-xl regular-font text-on-surface/50">1st November 2025</p>
                <p class="text-xl lg:text-2xl regular-font text-on-surface/70">Date Of Registration</p>
            </div>
            <div class="flex flex-col">
                <p class="text-lg lg:text-xl regular-font text-on-surface/50">11th December 2025</p>
                <p class="text-xl lg:text-2xl regular-font text-on-surface/70">Conference Date</p>
            </div>
        </div>
    </div>
    <div class="h-fit w-full flex flex-row items-start justify-start lg:justify-center relative"
         id="about-conference">
        <p class="text-7xl brand-font text-on-surface self-start rotate-180 sticky top-5"
           style="writing-mode: vertical-lr">
            About
            Conference</p>
        <div class="w-full max-w-[850px] h-full flex flex-col items-start justify-start gap-3 px-2">
            <p class="text-xl lg:text-2xl regular-font text-on-surface/70">
                Welcome to Smart Cities, Healthcare, and Autonomous Systems (SCHAS) 2025, a transformative conference
                designed to explore the future of technology in urban development, healthcare, and autonomous systems.
                Our
                mission is to bring together thought leaders, innovators, and experts from diverse fields to share
                insights,
                discuss cutting-edge research, and collaborate on sustainable solutions that shape the cities of
                tomorrow.
                As we stand on the brink of a new era of technological advancements, SCHAS 2025 focuses on how smart
                cities,
                advanced healthcare solutions, and autonomous systems can work synergistically to improve the quality of
                life, streamline services, and drive economic growth. With a focus on innovation and practical
                implementation, this conference aims to foster cross-disciplinary collaboration to solve some of the
                most
                pressing challenges facing society today.
            </p>
        </div>
    </div>
    <div class="h-fit w-full flex flex-col items-center gap-3">
        <p class="text-7xl brand-font text-on-surface">Publication</p>
        <div class="h-[80px] w-[200px] lg:h-[120px] lg:w-[240px] p-3 bg-white">
            <img src="{ieeeXploreLogo}" alt="IEEE xplore digital library logo" class="h-full w-full object-fill">
        </div>
        <p class="text-7xl brand-font text-on-surface mt-5">Co-Sponsors</p>
        <div class="h-[80px] w-[200px] lg:h-[120px] lg:w-[240px] p-3 bg-white">
            <img src="{ieeeLogo}" alt="IEEE logo" class="h-full w-full object-fill">
        </div>
        <div class="h-[80px] w-[200px] lg:h-[120px] lg:w-[240px] p-3 bg-white">
            <img src="{ieeeCisLogo}" alt="IEEE Computational Intelligence Society logo"
                 class="h-full w-full object-fill">
        </div>
        <p class="text-7xl brand-font text-on-surface mt-5">Our Partners</p>
        <div class="h-[80px] w-[200px] lg:h-[120px] lg:w-[240px] p-3 bg-white">
            <img src="{manipalLogo}" alt="IEEE Computational Intelligence Society logo"
                 class="h-full w-full object-fill">
        </div>
    </div>
    <div class="h-fit w-full flex flex-row items-start justify-start lg:justify-center relative"
         id="about-organiser">
        <p class="text-7xl brand-font text-on-surface self-start rotate-180 sticky top-5"
           style="writing-mode: vertical-lr">
            About
            Organiser</p>
        <div class="w-full max-w-[850px] h-full flex flex-col items-start justify-start gap-3 px-2">
            <p class="text-xl lg:text-2xl regular-font text-on-surface/70">
                Bengaluru, often referred to as the "Silicon Valley of India," is a vibrant and bustling metropolis
                located in the southern state of Karnataka. Known for its thriving IT and technology industry, the city
                is a hub for innovation and entrepreneurship.

                Bengaluru also boasts a rich cultural heritage, with historic landmarks, diverse cuisine, and a pleasant
                climate that has earned it the nickname "Garden City of India." It is a dynamic and cosmopolitan city
                that seamlessly blends tradition and modernity, making it a major center for business, education, and
                culture in India.
            </p>
        </div>
    </div>
    <div class="h-full w-full flex items-center justify-center">
        <div class="h-[400px] w-full max-w-[850px] flex flex-col items-center justify-center p-2 relative">
            <div class="h-full w-full flex flex-col bg-primary rounded-lg p-2 items-center justify-center relative">
                <div class="flex flex-col self-start absolute top-2 left-2">
                    <p class="text-lg regular-font text-surface/70">Logo Here</p>
                </div>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                    <Waves/>
                </div>
                <div class="flex flex-col h-full justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">
                    <p class="text-[28vw] min-[879px]:text-[15rem] brand-font text-surface/20 leading-[1] text-nowrap z-[2] mix-blend-difference">
                        SCHAP v2025</p>
                </div>
                <div class="flex flex-row w-full items-center justify-center z-[5] mix-blend-plus-lighter">
                    <div class="flex flex-col h-full w-full items-start justify-center px-4">
                        <p class="text-2xl regular-font text-surface">Links</p>
                        <div class="flex flex-col pl-3">
                            <p class="text-xl regular-font text-surface/70 ">Home</p>
                            <p class="text-xl regular-font text-surface/70">About</p>
                            <!--                        <div class="flex flex-col pl-6">-->
                            <!--                            <p class="text-xl regular-font text-surface/50">About Conference</p>-->
                            <!--                            <p class="text-xl regular-font text-surface/50">About Organiser</p>-->
                            <!--                        </div>-->
                            <p class="text-xl regular-font text-surface/70 whitespace-nowrap">Call For Papers</p>
                            <p class="text-xl regular-font text-surface/70">Speaker</p>
                            <p class="text-xl regular-font text-surface/70">Committee</p>
                            <p class="text-xl regular-font text-surface/70">Author's Info</p>
                        </div>
                    </div>
                    <div class="flex flex-col h-full w-full items-start justify-start px-4">
                        <p class="text-2xl regular-font text-surface">Contact Us</p>
                        <div class="flex flex-col pl-3">
                            <p class="text-xl regular-font text-surface/70">Linkedin</p>
                            <p class="text-xl regular-font text-surface/70">Twitter</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>