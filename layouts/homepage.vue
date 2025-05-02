<template lang="pug">

.fancy-navbar(:class="{'not-top': isNotTop}")
    a.back-button(@click="$router.back()")
        svg(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6")
            path(stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18")
    
    .content-y
        img(src="~/assets/img/jrmsu-log.png")
        h1 JRMSU SSG Electronic Election Portal

    a.empty


.bg-image
    .overlay

        h2 Home Page

.card-container
    slot

</template>

<style scoped lang="scss">
.bg-image {
    background: url("~/assets/img/bg.png") no-repeat center/cover;
    min-height: 40vh;
    z-index: -1;
    position: relative;

    .overlay {
        padding-top: 64px;
        inset: 0;
        position: absolute;
        display: flex;
        padding: 15px;
        align-items: center;
        justify-content: center;
        background: radial-gradient(#1d1a71a9, #1d1a71d8);

        h2 {
            color: white;
            font-size: 25px;;
        }
    }
}

.fancy-navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    padding: 10px;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    transition: all 0.3s ease-in-out;

    &.not-top {
        background-color: #1d1a71;
    }

    a.back-button {
        vertical-align: middle;
        // border: 1px solid red; 
        border-radius: 50%;
        display: flex;
        align-items: center;
        color: white;
        padding: 10px;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

        &:hover {
            background-color: rgba(0, 0, 0, 0.161);
        }

        &:active {
            transform: scale(0.90);
        }
    }
    svg {
        width: 25px;
    }

    
    .content-y {
        display: flex;
        align-items: center;
        
        img {
            width: 50px;
            margin-right: 10px;
        }

        h1 {
            font-size: 17px;
            color: white;
            text-align: left;
        }
    }
}

.card-container {
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
    max-width: 700px;
    margin: auto;
    margin-top: -13vh;
    margin-bottom: 50px;
    z-index: 2;
    position: relative;
    background-color: white;
    border-radius: 8px;
}
</style>

<script setup>
const isNotTop = ref(false)

onMounted(() => {
    window.addEventListener('scroll', () => {
        isNotTop.value = window.scrollY > 0

        console.log(isNotTop.value);
    })
})

onUnmounted(() => {
    window.removeEventListener('scroll', () => {})
})


</script>
