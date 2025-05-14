<template lang="pug">

.containerx
    img(src="~/assets/img/jrmsu-log.png")
    h1 JRMSU SSG Electronic Election Portal
    p Welcome to the JRMSU SSG Election Portal

    //- Error Warning
    .warn
        svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6")
            path(fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd")
        p 
            b Notice (May 14, 2025 10:12 AM): 
            | The Creatives team has addressed the login issue; however, we are continuing to investigate to ensure the problem is fully resolved. Additionally, we are currently examining the registration system to identify any remaining issues.
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

.warn {
    display: flex;
    align-items: center;
    background-color: #12ea73;
    padding: 15px;
    border-radius: 10px;

    svg {
        width: 40px;
        flex: 0 0 40px;
    }

    p {
        margin: 0 !important;
        padding: 0 10px;
        text-align: left;
    }
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
            Student_ID: student_id.value, 
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