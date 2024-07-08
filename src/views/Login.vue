<template>
  <div class="flex flex-col gap-3 items-center">
    <h1>Welcome to Eva-Chart</h1>
    <input class="h-10 rounded-lg pl-4 w-2/4" v-model="credentials.Email" placeholder="Email" />
    <input class="h-10 rounded-lg pl-4 w-2/4" v-model="credentials.Password" placeholder="Password" type="password" />
    <button @click="login">
        <span v-if="!isLoading">Login</span>
        <span v-else class="flex items-center">
            <div class=" mr-3">
            <span class="!-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Logining...</span>
            </div>
            <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status">
            </div>
        </span>
    </button>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const isLoading = computed(() => store.getters.isLoading)
    const values = ref([7,15,30,60])
    const credentials = ref({
    Email: "homework@eva.guru",
    Password: "Homeworkeva1**",
    GrantType: "password",
    Scope: "amazon_data",
    ClientId: "C0001",
    ClientSecret: "SECRET0001",
    RedirectUri: "https://api.eva.guru"
});

    const login = async () => {
        await store.dispatch('getTokenwithLogin', credentials.value);
        await store.dispatch('getGraphData')

      if (store.getters.isAuthenticated) {
        router.push('/graph');
      }
      else {
        toast("Wrong Cridentials : Password or Email", {
        autoClose: 2000,
        type : 'warning',
        position: toast.POSITION.TOP_RIGHT,
        });
      }

    };

    return {
      credentials,
      login,
      isLoading
    };
  }
};
</script>
