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
    
    button(@click="$router.push('/registration')") LOGIN
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