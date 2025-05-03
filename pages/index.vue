<template lang="pug">

.containerx
    img(src="~/assets/img/jrmsu-log.png")
    h1 JRMSU SSG Electronic Election Portal
    p Welcome to the JRMSU SSG Election Portal

    .input-container
        label Student ID
        input(type="text" placeholder="Student ID: eg. 25-A-00000")
    
    .input-container
        label Default Password (Last Name)
        input(type="password" placeholder="**********")
    
    button(@click="$router.push('/registration')") 
        | LOGIN
        svg(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6")
            path(stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3")
</template>

<style lang="scss" scoped>




.containerx {
    max-width: 500px;
    margin: auto;
    
    img {
        max-width: 150px;
        margin: 20px;
        margin-top: 80px;
    }

    h1 {
        font-size: 25px;;
        margin: 10px;
        color: #1d1a71;
    }

    p {
        color: #505050;
        margin: 10px;
        margin-bottom: 40px;
    }
}


</style>