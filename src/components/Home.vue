<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

</script>

<template>
    <Header />
    <main class="main">
        <section class="top">
            <div class="container">
                <div class="top__inner">
                    <h1 class="top__title">
                        A cup of tea is a moment of calm in the chaos of life
                    </h1>
                    <p class="top__text">
                        Wide selection of high-quality teas from all over the world, carefully curated by tea experts.
                    </p>
                </div>
            </div>
        </section>
        <blockquote class="blockquote">
            <p class="blockquote__text">
                "Tea is not just a drink, it's a way of life and a way to connect with our loved ones."
            </p> 
       </blockquote>
       <section class="tea__col">
            <div class="container">
                <div class="title">
                    Explore our Collections
                </div>
                <ul class="tea__col-wrap">
                    <li class="tea__item">
                     <img src="/img/black.png" alt="">
                     Black
                 </li>
                    <li class="tea__item">
                     <img src="/img/green.png" alt="">
                     Green
                 </li>
                    <li class="tea__item">
                     <img src="/img/white.png" alt="">
                     White
                 </li>
                    <li class="tea__item">
                     <img src="/img/oolong.png" alt="">
                     Oolong
                 </li>
                    <li class="tea__item">
                     <img src="/img/pu-erh.png" alt="">
                     Pu-erh
                 </li> 
                 </ul>
            </div>
       </section>
       <section class="client">
            <div class="container">
                <div class="title">
                    What our Clients say
                </div>
                <ul class="client__list">
                    <li class="client__item">
                        <p class="client__text">
                            "As a tea enthusiast, I have tried teas from all over the world, but this tea store truly stands out. Their teas are of the highest quality and the variety is impressive. This is definitely a tea store that every tea lover should visit."
                        </p>
                        <div class="client__name">
                            Alice
                        </div>
                    </li>
                    <li class="client__item">
                        <p class="client__text">
                            "This tea store is my go-to for all my tea needs. Their selection is unbeatable and the quality of their teas is exceptional."
                        </p>
                        <div class="client__name">
                            Mad-Hatter
                        </div>
                    </li>
                    <li class="client__item">
                        <p class="client__text">
                            "If you're a tea lover, you must visit this tea store. The selection is vast and the quality is outstanding. I guarantee you won't be disappointed."
                        </p>
                        <div class="client__name">
                            Dormouse
                        </div>
                    </li>
                    <li class="client__item">
                        <p class="client__text">
                            "I am not a big tea drinker, but this tea store has converted me. I highly recommend this tea store to anyone looking for a high-quality tea experience."
                        </p>
                        <div class="client__name">
                            March Hare
                        </div>
                    </li>
                </ul>
            </div>
       </section>
       <section class="blog">
            <div class="container">
                <div class="title">
                    Our Tea Blog
                </div>
                <ul class="blog__list">
                    <li class="blog__item">
                        <img src="/img/blog-1.png" alt="">
                        <div class="blog__texts">
                            <div class="blog__text">
                                Tea Time Travels: Funny Moments from Around the World
                            </div>
                            <div class="blog__name">by Robinson Crusoe</div>
                            <a href="#" class="blog__link">Read<i class="fa-solid fa-chevron-right"></i></a>
                        </div>
                    </li>
                    <li class="blog__item">
                        <img src="/img/blog-2.png" alt="">
                        <div class="blog__texts">
                            <div class="blog__text">
                                The Role of Tea in Mental Health
                            </div>
                            <div class="blog__name">by Joker</div>
                            <a href="#" class="blog__link">Read<i class="fa-solid fa-chevron-right"></i></a>
                        </div>
                    </li>
                    <li class="blog__item">
                        <img src="/img/blog-3.png" alt="">
                        <div class="blog__texts">
                            <div class="blog__text">
                                Tea-rific Tales: Hilarious Stories from Tea Lovers
                            </div>
                            <div class="blog__name">by Casper the Friendly Ghost</div>
                            <a href="#" class="blog__link">Read<i class="fa-solid fa-chevron-right"></i></a>
                        </div>
                    </li>
                    <li class="blog__item">
                        <img src="/img/blog-4.png" alt="">
                        <div class="blog__texts">
                            <div class="blog__text">
                                Tea and Caffeine: Effects on the Brain and Behavior
                            </div>
                            <div class="blog__name">by Author Authorius</div>
                            <a href="#" class="blog__link">Read<i class="fa-solid fa-chevron-right"></i></a>
                        </div>
                    </li>
                    
                </ul>
                <button class="blog__btn">View all</button>
            </div>
       </section>
       <section class="sub">
            <div class="container">
                <h2 class="title sub__title">
                    Want to know more?
                </h2>
                <div class="sub__inner">
                    <div class="sub__text">
                        Join our mailing list and stay up-to-date with the latest news, promotions, and exclusive offers from our tea store. Be the first to know about new tea arrivals, seasonal blends, and special discounts. Don't miss out on the tea-rrific perks - sign up today!
                    </div>
                    <form action="" class="sub__form">
                        <div class="sub__form-wrap">
                            <input type="text" class="sub__input" v-bind:placeholder="email" v-model="inputValue">
                            <RouterLink to="/login" class="blog__btn sub__btn">Join</RouterLink>
                        </div>
                        <input type="checkbox" class="sub__form-check">
                        We take your privacy seriously and are committed to protecting your personal information. By subscribing to our mailing list, you are consenting to receive periodic emails from us about our products, promotions, and other tea-related information.
                    </form>
                </div>
            </div>
       </section>
       <section class="prioritise">
        <div class="container">

            <div class="title">
                We Prioritise
            </div>
            <ul class="prioritise__list">
                <li class="prioritise__item">
                    <div class="prioritise__name">
                        Single garden teas
                    </div>
                    <div class="prioritise__text">
                        Complete transparency
                    </div>
                    <img src="/img/Vector.svg" alt="">
                </li>
                <li class="prioritise__item">
                    <div class="prioritise__name">
                        Only Loose leaf tea
                    </div>
                    <div class="prioritise__text">
                        Best Drinking Experience
                    </div>
                    <img src="/img/Vector 2.svg" alt="">
                </li>
                <li class="prioritise__item">
                    <div class="prioritise__name">
                        Customer support
                    </div>
                    <div class="prioritise__text">
                        No bots, no automated replies
                    </div>
                    <img src="/img/Vector 3.svg" alt="">
                </li>
                <li class="prioritise__item">
                    <div class="prioritise__name">
                        Fast shipping
                    </div>
                    <div class="prioritise__text">
                        Save, Convenient, Reliable
                    </div>
                    <img src="/img/Group 4.svg" alt="">
                </li>
            </ul>
        </div>
        </section>
    </main>
    <Footer />

</template>

<script>
export default {
    data() {
        return {
email: "Teo@gmail.com",
inputValue: ""
        }
    },
}

</script>