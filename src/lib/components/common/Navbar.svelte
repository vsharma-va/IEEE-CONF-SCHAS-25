<script>
    import {gsap} from "gsap/dist/gsap";
    import {Flip} from "gsap/dist/Flip";
    import {onMount} from "svelte";

    let isNavOpen = false;
    let submenuState = {'about': false};

    onMount(() => {
        gsap.registerPlugin(Flip);
    });

    // function  closeNavbar() {
    //     gsap.to('.menu-item-text', {
    //         opacity: 0,
    //         duration: 0.25,
    //         ease: 'sine',
    //         onComplete: () => {
    //             const menuItemsState = Flip.getState(".menu-item");
    //             const menuItems = document.getElementsByClassName("menu-item");
    //             for (let key in menuItems) {
    //                 if (menuItems[key].classList !== undefined) {
    //                     menuItems[key].classList.remove('h-fit', 'w-fit', 'rounded-lg', 'px-2', 'py-1');
    //                     menuItems[key].classList.add('h-6', 'w-6', 'rounded-full');
    //                 }
    //             }
    //             gsap.set('.menu-item-text', {
    //                 display: 'flex',
    //             });
    //             Flip.from(menuItemsState, {
    //                 duration: 0.25,
    //                 ease: 'sine',
    //                 absolute: false,
    //                 onComplete: () => {
    //                     const menuItemsState = Flip.getState(".menu-item");
    //                     const menuItems = document.getElementsByClassName("menu-item");
    //                     const menuHeader = document.getElementsByClassName("menu-header")[0];
    //                     menuHeader.classList.add('absolute');
    //                     for (let key in menuItems) {
    //                         if (menuItems[key].classList !== undefined) {
    //                             menuItems[key].classList.add('absolute');
    //                         }
    //                     }
    //                     Flip.from(menuItemsState, {
    //                         duration: 0.25,
    //                         ease: 'sine',
    //                         absolute: false,
    //                         onComplete: () => {
    //                             isNavOpen = false;
    //                         }
    //                     });
    //                 }
    //             })
    //         }
    //     });
    // }
    //
    // function openNavbar() {
    //     const menuItemsState = Flip.getState(".menu-item");
    //
    //     const menuItems = document.getElementsByClassName("menu-item");
    //     const menuHeader = document.getElementsByClassName("menu-header")[0];
    //     menuHeader.classList.remove('absolute');
    //     for (let key in menuItems) {
    //         if (menuItems[key].classList !== undefined) {
    //             menuItems[key].classList.remove('absolute');
    //         }
    //     }
    //
    //     Flip.from(menuItemsState, {
    //         duration: 0.25,
    //         ease: 'sine',
    //         absolute: false,
    //         onComplete: () => {
    //             gsap.set('.menu-item-text', {
    //                 display: 'flex',
    //             });
    //             const menuItemsState = Flip.getState(".menu-item");
    //             for (let key in menuItems) {
    //                 if (menuItems[key].classList !== undefined) {
    //                     menuItems[key].classList.remove('h-6', 'w-6', 'rounded-full');
    //                     menuItems[key].classList.add('h-fit', 'w-fit', 'rounded-lg', 'px-2', 'py-1');
    //                 }
    //             }
    //             Flip.from(menuItemsState, {
    //                 duration: 0.25,
    //                 ease: 'sine',
    //                 absolute: false,
    //                 onComplete: () => {
    //                     gsap.to('.menu-item-text', {
    //                         opacity: 1,
    //                         duration:0.25,
    //                         ease: 'sine'
    //                     });
    //                     isNavOpen = true;
    //                 }
    //             });
    //         }
    //     })
    // }
    function navController() {
        if (!isNavOpen) {
            let navOpenTimeline = gsap.timeline({
                onComplete: () => {
                    isNavOpen = true;
                }
            });
            navOpenTimeline.to('.nav-content', {
                display: 'flex',
                opacity: 1,
                height: '425px',
                width: '250px',
                ease: 'power4.inOut'
            });
            navOpenTimeline.to('.nav-button', {
                borderTopRightRadius: '8px',
                borderBottomRightRadius: '8px',
                duration: 0.5,
            }, '<');
            navOpenTimeline.to('.nav-links', {
                display: 'flex',
                opacity: 1,
                ease: 'power4.inOut'
            }, '<+0.1');
        } else {
            let navCloseTimeline = gsap.timeline({
                onComplete: () => {
                    isNavOpen = false;
                }
            });
            navCloseTimeline.to('.nav-links', {
                display: 'none',
                opacity: 0,
                ease: 'power4.inOut'
            });
            navCloseTimeline.to('.nav-button', {
                borderTopRightRadius: '9999px',
                borderBottomRightRadius: '9999px',
                duration: 0.5,
            }, '<');
            navCloseTimeline.to('.nav-content', {
                display: 'none',
                opacity: 0,
                height: 0,
                width: 0,
                ease: 'power4.inOut',
            }, '<+0.1');
        }

    }

    function onClickShowSubmenu(prefix) {
        console.log('firing');
        if (!submenuState[prefix]) {
            const state = Flip.getState(`.${prefix}-main`);
            const element = document.getElementsByClassName(`${prefix}-submenu`);
            for (let key in element) {
                if (element[key].classList) {
                    element[key].classList.remove('hidden');
                    element[key].classList.add('flex', 'flex-col');
                }
            }
            Flip.from(state, {
                duration: 0.25,
                ease: 'power4.inOut',

                onComplete: () => {
                    gsap.to(`.${prefix}-submenu-item`, {
                        opacity: 1,
                        duration: 0.25,
                    });
                    submenuState[prefix] = true;
                }
            })
        } else {
            const state = Flip.getState(`.${prefix}-main`);
            const element = document.getElementsByClassName(`${prefix}-submenu`);
            for (let key in element) {
                if (element[key].classList) {
                    element[key].classList.remove('flex', 'flex-col');
                    element[key].classList.add('hidden');
                }
            }
            Flip.from(state, {
                duration: 0.25,
                ease: 'power4.inOut',
                onStart: () => {
                    gsap.to(`.${prefix}-submenu-item`, {
                        opacity: 0,
                        duration: 0.25
                    });
                },
                onComplete: () => {
                    submenuState[prefix] = false;
                }
            })
        }
    }

</script>

<div class="flex flex-row w-full h-fit items-center justify-between fixed top-2 z-[99] px-3">
    <div class="flex flex-row w-full max-w-full h-full items-center px-3 pt-3 pb-3 bg-primary/20 rounded-full justify-between backdrop-blur-xl">
        <div class="">
            <p class="text-xl regular-font text-on-surface/70">Logo Here</p>
        </div>
        <button class="flex items-center justify-center h-8 w-8 rounded-full bg-primary nav-button z-[100]"
                on:click={navController}>
            <svg width="1rem" height="1rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="fill-surface">
                <path d="M4 18L20 18" stroke="#f9f9ff" stroke-width="2" stroke-linecap="round"/>
                <path d="M4 12L20 12" stroke="#f9f9ff" stroke-width="2" stroke-linecap="round"/>
                <path d="M4 6L20 6" stroke="#f9f9ff" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </button>
    </div>
</div>
<div class="fixed top-5 right-6 p-5 h-0 w-0 bg-primary/70 backdrop-blur-xl rounded-lg nav-content z-[99] opacity-0 hidden flex-col items-start justify-center">
    <button class="flex items-center justify-center h-8 w-8 rounded-full bg-primary nav-button z-[100] absolute top-0 right-0"
            on:click={navController}>
        <svg width="1rem" height="1rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="fill-surface">
            <path d="M4 18L20 18" stroke="#f9f9ff" stroke-width="2" stroke-linecap="round"/>
            <path d="M4 12L20 12" stroke="#f9f9ff" stroke-width="2" stroke-linecap="round"/>
            <path d="M4 6L20 6" stroke="#f9f9ff" stroke-width="2" stroke-linecap="round"/>
        </svg>
    </button>
    <p class="text-xl regular-font font-thin text-surface nav-links opacity-0 hidden">Home</p>
    <div class="text-xl regular-font font-thin text-surface flex-col items-start about-main nav-links opacity-0 hidden"
         on:click={() => {onClickShowSubmenu('about')}}>
        <button>
            About -
        </button>
        <div class="pl-5 hidden about-submenu">
            <p class="text-xl regular-font font-thin text-surface/70 about-submenu-item opacity-0">About Organiser</p>
            <p class="text-xl regular-font font-thin text-surface/70 about-submenu-item opacity-0">About Conference</p>
        </div>
    </div>
    <p class="text-xl regular-font font-thin text-surface nav-links opacity-0 hidden">Call For Paper</p>
    <p class="text-xl regular-font font-thin text-surface nav-links opacity-0 hidden">Speaker</p>
    <div class="text-xl regular-font font-thin text-surface flex-col items-start committee-main nav-links opacity-0 hidden"
         on:click={() => {onClickShowSubmenu('committee')}}>
        <button>
            Committee -
        </button>
        <div class="pl-5 hidden committee-submenu">
            <p class="text-xl regular-font font-thin text-surface/70 committee-submenu-item opacity-0">Advisory</p>
            <p class="text-xl regular-font font-thin text-surface/70 committee-submenu-item opacity-0">Technical
                Program</p>
            <p class="text-xl regular-font font-thin text-surface/70 committee-submenu-item opacity-0">Organizing</p>
        </div>
    </div>
    <div class="text-xl regular-font font-thin text-surface flex-col items-start author-main nav-links opacity-0 hidden"
         on:click={() => {onClickShowSubmenu('author')}}>
        <button>
            Author's Information -
        </button>
        <div class="pl-5 author-submenu hidden">
            <p class="text-xl regular-font font-thin text-surface/70 author-submenu-item opacity-0">Paper Submission</p>
            <p class="text-xl regular-font font-thin text-surface/70 author-submenu-item opacity-0">Registration</p>
            <p class="text-xl regular-font font-thin text-surface/70 author-submenu-item opacity-0">SCHAP Brochure</p>
        </div>
    </div>
</div>

<!--<div class="absolute top-3 right-3 flex h-fit w-fit flex-col-reverse gap-2 items-end justify-end z-[99] ">-->
<!--    <div class="absolute top-0 right-0 rounded-full bg-on-surface h-6 w-6 menu-item shadow-xl">-->
<!--        <p class="text-xl regular-font font-thin text-surface hidden menu-item-text opacity-0">Home</p>-->
<!--    </div>-->
<!--    <div class="absolute top-0 right-0 rounded-full bg-on-surface h-6 w-6 menu-item shadow-xl">-->
<!--        <p class="text-xl regular-font font-thin text-surface hidden menu-item-text opacity-0">About</p>-->
<!--    </div>-->
<!--    <div class="absolute top-0 right-0 rounded-full bg-on-surface h-6 w-6 menu-item shadow-xl">-->
<!--        <p class="text-xl regular-font font-thin text-surface hidden menu-item-text opacity-0">Call For Paper</p>-->
<!--    </div>-->
<!--    <div class="absolute top-0 right-0 rounded-full bg-on-surface h-6 w-6 menu-item shadow-xl">-->
<!--        <p class="text-xl regular-font font-thin text-surface hidden menu-item-text opacity-0">Speaker</p>-->
<!--    </div>-->
<!--    <div class="absolute top-0 right-0 rounded-full bg-on-surface h-6 w-6 menu-item shadow-xl">-->
<!--        <p class="text-xl regular-font font-thin text-surface hidden menu-item-text opacity-0">Committee</p>-->
<!--    </div>-->
<!--    <div class="absolute top-0 right-0 rounded-full bg-on-surface h-6 w-6 menu-item shadow-xl">-->
<!--        <p class="text-xl regular-font font-thin text-surface hidden menu-item-text opacity-0">Authors-->
<!--            Information</p>-->
<!--    </div>-->
<!--    <button class="absolute top-0 right-0 rounded-full bg-primary h-6 w-6 menu-header" on:click={() => {-->
<!--        isNavOpen ? closeNavbar() : openNavbar();-->
<!--    }}>-->
<!--    </button>-->
<!--</div>-->