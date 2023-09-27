<template>
    <div class="w-full h-full relative flex gap-5 flex-col items-center justify-center py-36">
        
        <h2 class="text-5xl font-extrabold text-surf-white">Frequently asked questions</h2>
        
            <!-- FAQS -->

            <div class="py-12"></div>

   
            <!-- FAQ ONE -->
            <div class="faq-box flex flex-col w-2/4 hover:bg-surf-white hover:bg-opacity-25 hover:cursor-pointer">
                <div class="flex justify-between">
                    <p class="text-lg text-surf-white font-bold">If I already have a Surfpay Account where do I buy the SurfTouch Terminal?</p>
                    <!-- Open SVG -->
                    <button @click="open=true" :class="open?'hidden':''">
                    <svg  width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_1241)">
                        <path d="M14 28.9229C21.732 28.9229 28 22.6548 28 14.9229C28 7.19087 21.732 0.922852 14 0.922852C6.26801 0.922852 0 7.19087 0 14.9229C0 22.6548 6.26801 28.9229 14 28.9229Z" fill="white"/>
                        <path d="M8.6004 14.9227H19.3998" stroke="#0E44E1" stroke-width="3" stroke-linecap="round"/>
                        <path d="M14.0001 20.3224V9.52295" stroke="#0E44E1" stroke-width="3" stroke-linecap="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1_1241">
                        <rect width="28" height="28" fill="white" transform="translate(0 0.922852)"/>
                        </clipPath>
                        </defs>
                    </svg>

                     </button>
                     <!-- Close SVG -->
                    <button @click="open=false" :class="open?'':'hidden'">
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_1241)">
                            <path d="M14.5 28.9229C22.232 28.9229 28.5 22.6548 28.5 14.9229C28.5 7.19087 22.232 0.922852 14.5 0.922852C6.76801 0.922852 0.5 7.19087 0.5 14.9229C0.5 22.6548 6.76801 28.9229 14.5 28.9229Z" fill="white"/>
                            <path d="M9.1004 14.9227H19.8998" stroke="#0E44E1" stroke-width="3" stroke-linecap="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1_1241">
                            <rect width="28" height="28" fill="white" transform="translate(0.5 0.922852)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </button>  
                        
                </div>
                <!-- Answer -->
                <div :class="open?'':'hidden'">
                    <div class="w-full my-6" style="background:rgba(255, 255, 255, 0.30);height:0.5px;"></div>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi nibh, commodo id felis sit amet, viverra laoreet turpis. Fusce blandit sit amet quam vel sodales. Nunc eu enim sem. Nam tincidunt, leo a molestie gravida, odio nulla iaculis dolor, non placerat arcu mi id neque. Nulla facilisi. Pellentesque ut vestibulum turpis. Nulla dapibus rutrum dictum. Aenean vel mattis ipsum. Integer in justo vel ante convallis volutpat sit amet eget velit. Sed eget augue quis augue rutrum volutpat. Cras aliquet imperdiet urna, sit amet suscipit massa tincidunt rhoncus. Donec nisi elit, vestibulum vitae enim ut, lacinia consectetur nisi. Nullam vitae ligula at mi lobortis pellentesque.</p>

                </div>
             </div>

              <!-- FAQ TWO -->
              <div class="faq-box flex flex-col w-2/4  hover:bg-surf-white hover:bg-opacity-25 hover:cursor-pointer" >
                <div class="flex justify-between">
                    <p class="text-lg text-surf-white font-bold">What kind of payments I can recieve?</p>
                    <!-- Open SVG -->
                    <button @click="open=true" :class="open?'hidden':''">
                    <svg  width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_1241)">
                        <path d="M14 28.9229C21.732 28.9229 28 22.6548 28 14.9229C28 7.19087 21.732 0.922852 14 0.922852C6.26801 0.922852 0 7.19087 0 14.9229C0 22.6548 6.26801 28.9229 14 28.9229Z" fill="white"/>
                        <path d="M8.6004 14.9227H19.3998" stroke="#0E44E1" stroke-width="3" stroke-linecap="round"/>
                        <path d="M14.0001 20.3224V9.52295" stroke="#0E44E1" stroke-width="3" stroke-linecap="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1_1241">
                        <rect width="28" height="28" fill="white" transform="translate(0 0.922852)"/>
                        </clipPath>
                        </defs>
                    </svg>

                     </button>
                     <!-- Close SVG -->
                    <button @click="open=false" :class="open?'':'hidden'">
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_1241)">
                            <path d="M14.5 28.9229C22.232 28.9229 28.5 22.6548 28.5 14.9229C28.5 7.19087 22.232 0.922852 14.5 0.922852C6.76801 0.922852 0.5 7.19087 0.5 14.9229C0.5 22.6548 6.76801 28.9229 14.5 28.9229Z" fill="white"/>
                            <path d="M9.1004 14.9227H19.8998" stroke="#0E44E1" stroke-width="3" stroke-linecap="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1_1241">
                            <rect width="28" height="28" fill="white" transform="translate(0.5 0.922852)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </button>  
                        
                </div>
                <!-- Answer -->
                <div :class="open?'':'hidden'">
                    <div class="w-full my-6" style="background:rgba(255, 255, 255, 0.30);height:0.5px;"></div>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi nibh, commodo id felis sit amet, viverra laoreet turpis. Fusce blandit sit amet quam vel sodales. Nunc eu enim sem. Nam tincidunt, leo a molestie gravida, odio nulla iaculis dolor, non placerat arcu mi id neque. Nulla facilisi. Pellentesque ut vestibulum turpis. Nulla dapibus rutrum dictum. Aenean vel mattis ipsum. Integer in justo vel ante convallis volutpat sit amet eget velit. Sed eget augue quis augue rutrum volutpat. Cras aliquet imperdiet urna, sit amet suscipit massa tincidunt rhoncus. Donec nisi elit, vestibulum vitae enim ut, lacinia consectetur nisi. Nullam vitae ligula at mi lobortis pellentesque.</p>

                </div>
             </div>
              <!-- FAQ THREE -->
              <div class="faq-box flex flex-col w-2/4  hover:bg-surf-white hover:bg-opacity-25 hover:cursor-pointer">
                <div class="flex justify-between">
                    <p class="text-lg text-surf-white font-bold">What measure does Surfboard Payments take to keep my data privacy?</p>
                    <!-- Open SVG -->
                    <button @click="open=true" :class="open?'hidden':''">
                    <svg  width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_1241)">
                        <path d="M14 28.9229C21.732 28.9229 28 22.6548 28 14.9229C28 7.19087 21.732 0.922852 14 0.922852C6.26801 0.922852 0 7.19087 0 14.9229C0 22.6548 6.26801 28.9229 14 28.9229Z" fill="white"/>
                        <path d="M8.6004 14.9227H19.3998" stroke="#0E44E1" stroke-width="3" stroke-linecap="round"/>
                        <path d="M14.0001 20.3224V9.52295" stroke="#0E44E1" stroke-width="3" stroke-linecap="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1_1241">
                        <rect width="28" height="28" fill="white" transform="translate(0 0.922852)"/>
                        </clipPath>
                        </defs>
                    </svg>

                     </button>
                     <!-- Close SVG -->
                    <button @click="open=false" :class="open?'':'hidden'">
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_1241)">
                            <path d="M14.5 28.9229C22.232 28.9229 28.5 22.6548 28.5 14.9229C28.5 7.19087 22.232 0.922852 14.5 0.922852C6.76801 0.922852 0.5 7.19087 0.5 14.9229C0.5 22.6548 6.76801 28.9229 14.5 28.9229Z" fill="white"/>
                            <path d="M9.1004 14.9227H19.8998" stroke="#0E44E1" stroke-width="3" stroke-linecap="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1_1241">
                            <rect width="28" height="28" fill="white" transform="translate(0.5 0.922852)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </button>  
                        
                </div>
                <!-- Answer -->
                <div :class="open?'':'hidden'">
                    <div class="w-full my-6" style="background:rgba(255, 255, 255, 0.30);height:0.5px;"></div>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi nibh, commodo id felis sit amet, viverra laoreet turpis. Fusce blandit sit amet quam vel sodales. Nunc eu enim sem. Nam tincidunt, leo a molestie gravida, odio nulla iaculis dolor, non placerat arcu mi id neque. Nulla facilisi. Pellentesque ut vestibulum turpis. Nulla dapibus rutrum dictum. Aenean vel mattis ipsum. Integer in justo vel ante convallis volutpat sit amet eget velit. Sed eget augue quis augue rutrum volutpat. Cras aliquet imperdiet urna, sit amet suscipit massa tincidunt rhoncus. Donec nisi elit, vestibulum vitae enim ut, lacinia consectetur nisi. Nullam vitae ligula at mi lobortis pellentesque.</p>

                </div>
             </div>
              <!-- FAQ FOUR -->
              <div class="faq-box flex flex-col w-2/4  hover:bg-surf-white hover:bg-opacity-25 hover:cursor-pointer">
                <div class="flex justify-between">
                    <p class="text-lg text-surf-white font-bold">What kind of payments I can receive through Surfpay One?</p>
                    <!-- Open SVG -->
                    <button @click="open=true" :class="open?'hidden':''">
                    <svg  width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_1241)">
                        <path d="M14 28.9229C21.732 28.9229 28 22.6548 28 14.9229C28 7.19087 21.732 0.922852 14 0.922852C6.26801 0.922852 0 7.19087 0 14.9229C0 22.6548 6.26801 28.9229 14 28.9229Z" fill="white"/>
                        <path d="M8.6004 14.9227H19.3998" stroke="#0E44E1" stroke-width="3" stroke-linecap="round"/>
                        <path d="M14.0001 20.3224V9.52295" stroke="#0E44E1" stroke-width="3" stroke-linecap="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1_1241">
                        <rect width="28" height="28" fill="white" transform="translate(0 0.922852)"/>
                        </clipPath>
                        </defs>
                    </svg>

                     </button>
                     <!-- Close SVG -->
                    <button @click="open=false" :class="open?'':'hidden'">
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_1241)">
                            <path d="M14.5 28.9229C22.232 28.9229 28.5 22.6548 28.5 14.9229C28.5 7.19087 22.232 0.922852 14.5 0.922852C6.76801 0.922852 0.5 7.19087 0.5 14.9229C0.5 22.6548 6.76801 28.9229 14.5 28.9229Z" fill="white"/>
                            <path d="M9.1004 14.9227H19.8998" stroke="#0E44E1" stroke-width="3" stroke-linecap="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1_1241">
                            <rect width="28" height="28" fill="white" transform="translate(0.5 0.922852)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </button>  
                        
                </div>
                <!-- Answer -->
                <div :class="open?'':'hidden'">
                    <div class="w-full my-6" style="background:rgba(255, 255, 255, 0.30);height:0.5px;"></div>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi nibh, commodo id felis sit amet, viverra laoreet turpis. Fusce blandit sit amet quam vel sodales. Nunc eu enim sem. Nam tincidunt, leo a molestie gravida, odio nulla iaculis dolor, non placerat arcu mi id neque. Nulla facilisi. Pellentesque ut vestibulum turpis. Nulla dapibus rutrum dictum. Aenean vel mattis ipsum. Integer in justo vel ante convallis volutpat sit amet eget velit. Sed eget augue quis augue rutrum volutpat. Cras aliquet imperdiet urna, sit amet suscipit massa tincidunt rhoncus. Donec nisi elit, vestibulum vitae enim ut, lacinia consectetur nisi. Nullam vitae ligula at mi lobortis pellentesque.</p>

                </div>
            </div>
            
    </div>

</template>

<script>
    export default{
        data(){
            return{
                open:false
            }
     }
    }
</script>

<style>

</style>