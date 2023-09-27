<template>
    <div class="w-screen h-screen phone:w-screen phone:h-screen relative">
        <img src="@/assets/images/val_prop_desktop.png" alt="value proposition image" class="object-cover phone:w-full phone:h-full w-full h-full">

        <div class="z-10 absolute top-0 w-full h-full flex flex-row phone:flex-col">

            <!-- Text -->
            <div class="w-1/2 my-auto ml-32 phone:ml-8">
                <div>
                    <h1 class="text-8xl font-extrabold text-surf-white phone:text-5xl">
                        The one solution <br class="phone:hidden"> to accept 
                        payments <br class="phone:hidden"> for free
                    </h1>
                    <p class="font-base text-2xl my-10 text-surf-white ">
                        Introducing the easiest and most convenient way to accept <br> payments in your store.
                        Sign up now for a free terminal.
                    </p>
                    <button class="white-btn">
                        Start getting paid for free
                    </button>
                   
                    <div class="mt-24">
                        <p class="font-bold text-2xl mt-10 mb-5 opacity-50 text-surf-white">
                            Accepted card schemes
                        </p>
                        <div class="flex items-center">
                            <div>
                                <img src="@/assets/images/mastercard.png" class="object-fit" alt="mastercard">
                            </div>
                            <div>
                                <img src="@/assets/images/visa.png" class="object-fit mx-2"  alt="visa">
                            </div>
                            <div>
                                <img src="@/assets/images/americanexpress.png" class="object-fit mx-2" alt="american express">
                            </div>
                            <div>
                                <img src="@/assets/images/discover.png" class="object-fit mx-2" alt="discover">
                            </div>
                        </div>
                        
                    </div>
                </div>

               
            </div>


            <!-- Product image -->
            <div class="w-1/2 relative overflow-x-clip">
                <img src="@/assets/images/phone_desktop_2x.png" alt="product images" width="1600" class="absolute -top-28 object-fit">
                
                <!-- Pricing -->
                <div class="bottom-20 absolute right-0">
                    <div class="bg-surf-blue  py-8 pl-8 pr-16 text-surf-white rounded-l-2xl">
                        <p class="opacity-50 text-xl">
                            Get your first terminal
                        </p>
                        <h1 class="text-5xl mt-2 mb-2 opacity-100 font-extrabold">
                            For free
                        </h1>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style>

</style>