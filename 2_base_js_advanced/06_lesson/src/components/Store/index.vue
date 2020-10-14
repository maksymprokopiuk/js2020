<template>
    <div>
        <header-section 
          :products-in-cart="productsInCart"
          @title-filter="setTextFilterData"/>
        <div class="container">
            <filter-section 
            :years-list="yearsList"
            :categories-list="categoriesList"
            @filter-changed="setFilter"/>
            <product-list :products="filteredProducts"/>
        </div>
    </div>
</template>

<script>
import ProductList from "./components/ProductList";
import HeaderSection from "./components/HeaderSection";
import FilterSection from "./components/FilterSection";

    export default {
        name:"Store",

        components: {
            ProductList,
            HeaderSection,
            FilterSection
        },

        data() {
            return {
                categoriesList:[
                    {
                        id:'',
                        title:'Усі категорії'
                    },
                    {
                        id:'phone',
                        title:'Телефон'
                    },
                    {
                        id:'tv',
                        title:'Телефізор'
                    },
                    {
                        id:'sofa',
                        title:'Диван'
                    },

                ],
                filter:{
                    textFilter:null,//Щоб була реактивність
                    minPrice:null,
                    maxPrice:null,
                    prodYear:null,
                    category:null
                },
                productsInCart:0,
                myProducts:[
        {
          id:1,
          title:'Tel',
          price:1200,
          img:'https://i2.rozetka.ua/goods/19989681/samsung_galaxy_m51_6_128gb_black_images_19989681366.jpg',
          category:'phone',
          year:2010
        },
        {
          id:2,
          title:'Tel2',
          price:12040,
          img:'https://i2.rozetka.ua/goods/17831432/apple_iphone_se_64gb_white_images_17831432779.jpg',
          category:'phone',
          year:2015
        },
        {
          id:3,
          title:'Tel',
          price:1200,
          img:'https://i2.rozetka.ua/goods/19989681/samsung_galaxy_m51_6_128gb_black_images_19989681366.jpg',
          category:'phone',
          year:2004
        },
        {
          id:4,
          title:'Tel2',
          price:12040,
          img:'https://i2.rozetka.ua/goods/17831432/apple_iphone_se_64gb_white_images_17831432779.jpg',
          category:'phone',
          year:2010
        },
        {
          id:5,
          title:'Tel',
          price:1200,
          img:'https://i2.rozetka.ua/goods/19989681/samsung_galaxy_m51_6_128gb_black_images_19989681366.jpg',
          category:'phone',
          year:2010
        },
        {
          id:6,
          title:'Sofa',
          price:12040,
          img:'https://i2.rozetka.ua/goods/17831432/apple_iphone_se_64gb_white_images_17831432779.jpg',
          category:'sofa',
          year:2010
        },
        {
          id:7,
          title:'TV',
          price:1200,
          img:'https://i2.rozetka.ua/goods/19989681/samsung_galaxy_m51_6_128gb_black_images_19989681366.jpg',
          category:'tv',
          year:2010
        },
        {
          id:8,
          title:'Phone',
          price:12040,
          img:'https://i2.rozetka.ua/goods/17831432/apple_iphone_se_64gb_white_images_17831432779.jpg',
          category:'phone',
          year:2010
        },
        
      ],
            }
        },

        computed: {
            yearsList(){
                const arr=[]
                 this.filteredProducts.forEach(element => {
                    if(!arr.includes(element.year))
                       arr.push(element.year)
                });
                arr.sort()
                return arr
            },
            filteredProducts() {
                if(this.isFilterEmpty) return this.myProducts

                return this.myProducts.filter(item=>
                     (!this.filter.textFilter||item.title.toLowerCase().includes(this.filter.textFilter)) &&
                     (this.filter.minPrice===null||item.price>=this.filter.minPrice) &&
                     (this.filter.maxPrice===null||item.price<=this.filter.maxPrice) &&
                     (this.filter.prodYear===null||item.year==this.filter.prodYear) &&
                     (this.filter.category===null||item.category===this.filter.category)

                 ) 
            },
            isFilterEmpty(){
                return !this.filter.textFilter&&
                    this.filter.minPrice===null &&
                    this.filter.maxPrice===null &&
                    this.filter.prodYear===null &&
                    this.filter.category===null
            }
        },

        methods: {
            setTextFilterData(seachText) {
                this.filter={
                    ...this.filter,
                    textFilter: seachText.toLowerCase()
                }
            },
            setFilter(newFilter){
                 this.filter={
                    ...this.filter,
                    ...newFilter
                }
            }
        },
    }
</script>

<style lang="css" scoped>
.container{
    display: flex;
}

</style>