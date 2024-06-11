<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <a href="/" class="logo">
                    <img src="/img/logo.svg" alt="">
                </a>
                <nav class="menu">
                    <button class="menu__btn" @click="open = true">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                    <Teleport to="body">
                        <ul v-if="open" class="menu__list modal">
                            <li class="menu__close">
                                <button @click="open = false" class="menu__close-btn">
                                    <img src="/img/close.svg" alt="">
                                </button>
                            </li>
                            <li class="menu__item"><a href="#" class="menu__link">Black</a></li>
                            <li class="menu__item"><a href="#" class="menu__link">Green</a></li>
                            <li class="menu__item"><a href="#" class="menu__link">White</a></li>
                            <li class="menu__item"><a href="#" class="menu__link">Oolong</a></li>
                            <li class="menu__item"><a href="#" class="menu__link">Pu-erh</a></li>
                            <li class="mobile__nav">
                                <ul class="mobile__menu">
                                    <li class="mobile__menu-item"><a href="#" class="mobile__menu-link">Contact Us</a></li>
                                    <li class="mobile__menu-item"><a href="#" class="mobile__menu-link">Our Blog</a></li>
                                    <li class="mobile__menu-item"><a href="#" class="mobile__menu-link">Shipping and Delivery</a></li>
                                </ul>
                                <ul class="mobile__actions">
                                    <li class="mobile__actions-item">
                                        <a href="#" class="mobile__actions-link">
                                            <img src="/img/cart.svg" alt="">
                                        </a>         
                                        </li>
                                        <li class="mobile__actions-item">
                                        <a href="#" class="mobile__actions-link">
                                            <img src="/img/user.svg" alt="">
                                        </a>             
                                        </li>
                                        <li class="mobile__actions-item">
                                            <a href="#" class="user__actions-link">
                                            <img src="/img/search.svg" alt="">
                                        </a>    
                                        </li>
                                </ul>
                            </li>
                        </ul>
                    </Teleport>
                </nav>
                <ul class="user__actions">
                    <li class="user__actions-item">
                       <a href="#" class="user__actions-link">
                        <img src="/img/cart.svg" alt="">
                    </a>         
                    </li>
                    <li class="user__actions-item">
                       <a href="#" class="user__actions-link">
                        <img src="/img/user.svg" alt="">
                    </a>             
                    </li>
                    <li class="user__actions-item user__actions-item--search">
                        <a href="#" class="user__actions-link">
                        <img src="/img/search.svg" alt="">
                    </a>    
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>


<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 110%;
  left: 50%;
  margin-left: -180px;
}
</style>