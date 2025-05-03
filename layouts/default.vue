<template lang="pug">
.container
    //- Component Spinning Logo
    SpinningLogo
    .context-container
        slot
</template>

<style lang="scss" scoped>
.container {
    min-height: 100vh;
    display: flex;

    .context-container {
        text-align: center;
        padding: 20px;
        width: 50%;
    }
    
}

@media (max-width: 850px) {
    .container {
        flex-direction: column;
        .image-logo {
            width: 100%;
            height: 50vh;
            display: none;
        }
        .context-container {
            width: 100%;
        }
    }
}
</style>