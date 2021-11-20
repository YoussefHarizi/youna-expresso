<template>
 <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 class="text-2xl font-bold text-center">Login to your account</h3>
        <form  method="POST" @submit.prevent="login" @keydown="form.onKeydown($event)">
        <AlertError :form="form" />
            <div class="mt-4">
                <div>
                    <label class="block" for="email">Email</label>
                            <input type="text" placeholder="Email" v-model="form.email"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                </div>
                <HasError :form="form" field="email" />
                <div class="mt-4">
                    <label class="block">Password</label>
                            <input type="password" placeholder="Password" v-model="form.password"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                </div>
                <HasError :form="form" field="password" />
                <div class="flex items-baseline justify-between">
                    <button type="submit" class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                    <a href="#" class="text-sm text-blue-600 hover:underline">Forgot password?</a>
                </div>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import { Form } from "vform";
import { Button, HasError, AlertError } from "vform/src/components/tailwind";
export default {
  components: {
    Button,
    HasError,
    AlertError,
  },
  data() {
    return {
      form: new Form({
        email: "",
        password: "",
        remember: false,
      }),
    };
  },
  methods: {
    async login() {
      const response = await this.form.post("/api/v1/admin/login");
      // ...
    },
  },
};
</script>

<style>
</style>