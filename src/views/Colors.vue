<template>
    <div>
        <div class="row">
            <div class="col s12">
                <div class="card">
                    <div class="card-header">
                        <i class="material-icons">invert_colors</i> Theme colors
                    </div>

                    <div class="colors">
                        <div class="colors__item">
                            <div class="colors__item-badge" style="background: rgb(50, 31, 219)">
                            </div>
                            <p class="colors__item-name">Brand Primary Color</p>
                            <p class="colors__item-code">
                                HEX: <b>#321fdb</b>
                            </p>
                            <p class="colors__item-code">
                                RGB: <b>rgb(50, 31, 219)</b>
                            </p> 
                        </div>

                         <div class="colors__item">
                            <div class="colors__item-badge" style="background: 	rgb(46, 184, 92)">
                            </div>
                            <p class="colors__item-name">Brand Success Color</p>
                            <p class="colors__item-code">
                                HEX: <b>#2eb85c</b>
                            </p>
                            <p class="colors__item-code">
                                RGB: <b>rgb(46, 184, 92)</b>
                            </p> 
                        </div>

                          <div class="colors__item">
                            <div class="colors__item-badge" style="background: 	rgb(229, 83, 83)">
                            </div>
                            <p class="colors__item-name">Brand Danger Color</p>
                            <p class="colors__item-code">
                                HEX: <b>#e55353</b>
                            </p>
                            <p class="colors__item-code">
                                RGB: <b>rgb(229, 83, 83)</b>
                            </p> 
                        </div>

                          <div class="colors__item">
                            <div class="colors__item-badge" style="background: 	rgb(235, 237, 239)">
                            </div>
                            <p class="colors__item-name">Brand Light Color</p>
                            <p class="colors__item-code">
                                HEX: <b>#ebedef</b>
                            </p>
                            <p class="colors__item-code">
                                RGB: <b>rgb(235, 237, 239)</b>
                            </p> 
                        </div>

                        <div class="colors__item">
                            <div class="colors__item-badge" style="background: rgb(99, 111, 131)">
                            </div>
                            <p class="colors__item-name">Brand Dark Color</p>
                            <p class="colors__item-code">
                                HEX: <b>#636f83</b>
                            </p>
                            <p class="colors__item-code">
                                RGB: <b>rgb(99, 111, 131)</b>
                            </p> 
                        </div>
                        <div class="colors__item">
                            <div class="colors__item-badge" style="background: #26a69a">
                            </div>
                            <p class="colors__item-name">Materiallize Link Color</p>
                            <p class="colors__item-code">
                                HEX: <b>#26a69a</b>
                            </p>
                            <p class="colors__item-code">
                                RGB: <b>rgb(38, 166, 153)</b>
                            </p> 
                        </div>

                    </div>
                </div>
            </div>    
        </div>    
    </div>
</template>


<script>
export default {
 
}
</script>


<style lang="scss" scoped>
    .colors{
        display: flex;
        flex-wrap: wrap;
        &__item{
            width: 200px;
            padding: 0px 10px;
            &-badge{
                width: 150px;
                height: 150px;
                border-radius: 10px;
            }
            &-name{
                color: #3B4C64;
                font-weight: 600;
            }
        }
    }
    
</style>