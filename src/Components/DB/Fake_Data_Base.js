const firstIcon=require("../../images/website.png")
const secondIcon=require("../../images/camera.png")
const thirdIcon=require("../../images/phone-chat.png")
const features=[
    {
        id:"0",
        img:firstIcon,
        head:"E’lonlaringizni joylashtiring",
        title:'Tafsilotlar qancha ko’p bo’lsa, shuncha yaxshi. Yorqin sarlavha va tavsif yozing, kerakli rukn tanlang va rasm qo’shing.'
    },
    {
        id:"1",
        img:secondIcon,
        head:"Rasmlar oling",
        title:'Buning uchun OLX ilovasidan foydalaning. Mahsulotni suratga olib shu zumdayoq e’longa kiriting.'
    },
    {
        id:"2",
        img:thirdIcon,
        head:"Tezkor javob yo’llang",
        title:'Tezkor javoblar tezkor kulishuvlar demak. Xaridor sizga xabar yo’llashi bilan, bu haqida ogohlantirishlar orqali xabardor bo’ling.'
    }
]
const support=[
    {
        id:0,
        head:"Mening profilim",
        title:"Регистрация профиля, Настройки профиля, Технические неполадки",
        img:"https://theme.zdassets.com/theme_assets/759275/ae08be12c050c14d3ab87c97d87a756050aaa2fd.svg",
        path:"/myaccount"
    },
    {
        id:1,
        head:"Huquqiy ma'lumotlar",
        title:"Пользовательское соглашение, Политика конфиденциальности",
        img:"https://theme.zdassets.com/theme_assets/759275/914abb187f25c83408b2244f0f7881310e4d8ddf.svg",
        path:"/lawyer"
    },
    {
        id:2,
        head:"Xavfsizlik",
        title:"Общая информация о безопасности, Советы по сохранению безопасности",
        img:"https://theme.zdassets.com/theme_assets/759275/8506f59d65e03570348a69d9699a2f1d9d85a1cd.svg",
        path:"/security"
    },
    {
        id:3,
        head:"OLX qoidalari",
        title:"Правила публикации объявлений, Блоки и Удаления",
        img:"https://theme.zdassets.com/theme_assets/759275/d569b409b713ad719cb7af5707afcdab1652f431.svg",
        path:"/rules"
    },
    {
        id:4,
        head:"E'lon joylashtirish to'plamlari va limitlar",
        title:"Лимиты в категориях, Покупка дополнительных пакетов для размещения",
        img:"https://theme.zdassets.com/theme_assets/759275/cbe0baa8d1597c56adf3aba6bd1983e6282fcffe.svg",
        path:"/limits"
    },
    {
        id:5,
        head:"E'lonlarni boshqarish",
        title:"Действия с объявлением и Размещение объявлений",
        img:"https://theme.zdassets.com/theme_assets/759275/b5e219fdd55d7f96929fbd3551fe5193d25f5261.svg",
        path:"/announcements"
    },
    {
        id:6,
        head:"Pullik xizmatlar",
        title:"Виды услуг продвижения, Порядок оплаты",
        img:"https://theme.zdassets.com/theme_assets/759275/909c4b813312e401b8a2be4c4a2f42ee7aadb707.svg",
        path:"/service"
    },
    {
        id:7,
        head:"Biznes imkoniyatlari",
        title:"Банерная реклама на OLX.uz и Сотрудничество",
        img:"https://theme.zdassets.com/theme_assets/759275/6833ffcf710bdbb83320956b0b248e70268f75db.svg",
        path:"/business"
    },
    {
        id:8,
        head:"Biz haqimizda",
        title:"О компании и ее миссии",
        img:"https://theme.zdassets.com/theme_assets/759275/7284077d1e3c4e26a74072a0cf72d1e9ba00f62b.svg",
        path:"/aboutus"
    }
]
const questions=[
    {
        id:0,
        title:"Общая информация по Безопасности!",
        path:"/security"
    },
    {
        id:1,
        title:"Общая информация по Безопасности!",
        path:"/security"
    },
    {
        id:2,
        title:"5 золотых правил безопасности",
        path:"/fiveadvices"
    },
    {
        id:3,
        title:"Xavfsizlikning 5 ta oltin qoidasi",
        path:"/fiveadvices"
    },
    {
        id:4,
        title:"Список запрещенных товаров и услуг",
        path:"/prohibition"
    },
    {
        id:5,
        title:"E'lon berishga taqiqlangan tovarlar va xizmatlar ro'yxati",
        path:"/prohibition"
    },
    {
        id:6,
        title:"Общие правила публикации объявлений",
        path:"/announrules"
    },
    {
        id:7,
        title:"Eʼlon joylashtirish qoidalari",
        path:"/announrules"
    },
    {
        id:8,
        title:"Нарушение авторских прав (ТМ), копии, реплики",
        path:"/copyright"
    },
    {
        id:9,
        title:"Mualliflik huquqining buzilishi (TM)",
        path:"/copyright"
    }
]
module.exports={features,support,questions}