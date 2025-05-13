<template lang="pug">

.containerx
    img(src="~/assets/img/jrmsu-log.png")
    h1 JRMSU SSG Electronic Election Portal
    p Welcome to the JRMSU SSG Election Portal

    .input-container
        label Student ID
        input(type="text" placeholder="Student ID: eg. 25-A-00000" v-model="student_id" :disabled="isLoading")
    
    .input-container
        label Default Password (Last Name)
        input(type="password" placeholder="**********" v-model="password" :disabled="isLoading")
    
    button(@click="login()" :disabled="isLoading") 
        | {{ isLoading ? 'Logging in...' : 'Login' }}
        svg(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6")
            path(stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3")


    marquee(direction="left" class="marquee" behavior="scroll" scrolldelay="2") 
        | Copyright &copy; 2025
        | Powered by CCS-Creatives Commitee. 
        | Chairperson: Sheen Lee S. Edis
        | President: Stefhanie Ann V. Batucan
        | Vice-President: Ej A. Vinculado
        | Secretary: Nesfhe Niña S. Magsanay
        | Treasurer: Mischi Jeda J. Elumba
        | Auditor: Peter Robert C. Ayono
        | P.I.O.: Erl Yves C. Tagaro
        | Lead Back-End Developer: Resalute, Gehan Lumantas
        | Back-End Developers: Elumba, Robert Mayo Lomocso; Santiago, Renz Labadan; Hampac, Marklan Alforque; Ej A. Vinculado; Abang, Rusty Lloyd Acas; Edis, Sheen Lee Sotomayor
        | Lead Front-End Developer: Raldin C. Disomimba
        | Front-End Developers: Peter Robert C. Ayono; Erl Yves C. Tagaro; Ontoy, Jazrelle Tan; Binondo, Kenneth Bobby Divinagracia; Abang, Rusty Lloyd Acas; Edis, Sheen Lee Sotomayor
        | Lead UI/UX Graphic Designer: Almosera, Earl Jarvy Naong
        | UI/UX Graphic Designer: Mischi Jeda J. Elumba
</template>

<style lang="scss" scoped>


marquee {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: 5px;
    background-color: #ead012;
    color: black;
    font-size: 15px;
    z-index: 99;
}

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

<script setup>
import { useMyFetch } from "../composables/useMyFetch";

const student_id = ref('');
const password = ref('');

const isLoading = ref(false);

const { $toast } = useNuxtApp();

async function login() {
    isLoading.value = true;
    const { data, error } = await useMyFetch('Voter/Account/Login', {
        method: 'POST',
        body: {
            Username: student_id.value, 
            Password: password.value,
            Semester: "2nd",
            School_Year: "2024-2025"
        }
    })


    console.log(data.value);

    if (!data.value.Result || error.value) {
        $toast.fire({
            title: data.value?.Status || 'Invalid login credentials',
            icon: 'error'
        })
        isLoading.value = false;
        return;
    }

    const userData = useCookie('UserData');

    userData.value = data.value?.Result?.Record;

    console.log(userData.value);

    navigateTo('/home');

}


async function voterSearch() {
    isLoading.value = true;
    const { data, error } = await useMyFetch('Voter/Account/Login', {
        method: 'POST',
        body: {
            Username: student_id.value, 
            Password: password.value,
            Semester: "2nd",
            School_Year: "2024-2025"
        }
    })


    console.log(data.value);

    if (!data.value.Result || error.value) {
        $toast.fire({
            title: data.value?.Status || 'Invalid login credentials',
            icon: 'error'
        })
        isLoading.value = false;
        return;
    }

    const userData = useCookie('UserData');

    userData.value = data.value?.Result?.Record;

    navigateTo('/home');

}

</script>