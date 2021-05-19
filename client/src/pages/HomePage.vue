<template>
    <div class="bg-img">
        <div class="pt-5 coc">
            <div class="container">
                <h2 class="text-center display-2 text-warning">
                    Ресторан Делюкс
                </h2>
                <div class="card mt-5">
                    <div class="card-body">
                        На сайте нашего ресторан вы можете в режиме
                        <strong>Онлайн забронировать столик</strong>
                    </div>
                </div>
                <div class="card mt-3">
                    <div class="card-body">
                        Бронь доступна только
                        <strong>на ближайший месяц</strong>
                    </div>
                </div>
                <div class="card mt-3">
                    <div class="card-body">
                        Для брони необходимо лишь указать <strong>Имя</strong>,
                        <strong>Фамилию</strong> и
                        <strong>Номер телефона</strong>. <br />Мы свяжемся с
                        вами для уточнения деталей, чтобы сделал ваше прибывание
                        в ресторане идеальным
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-img {
    height: 100%;
    background-image: url("~@/assets/background.jpg");
    background-size: cover;
}
.coc {
    height: 100%;
    backdrop-filter: blur(5px);
}
</style>