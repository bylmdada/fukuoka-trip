// ===== 福岡八天七夜行程 Web App =====

// 旅行日期
const TRIP_START = new Date('2026-02-08T10:00:00+09:00');
const TRIP_END = new Date('2026-02-15T18:00:00+09:00');

// 匯率
const JPY_TO_TWD = 0.22;

// ===== 行程資料（含地圖連結）=====
const itineraryData = [
    {
        day: 1, date: "2/8", weekday: "日", theme: "抵達福岡・博多漫遊", icon: "🛬", weather: "5-11°C ☁️",
        schedule: [
            { time: "10:00", title: "抵達福岡機場", desc: "搭地鐵至天神站約12分鐘", map: "福岡空港" },
            { time: "11:30", title: "寄放行李", desc: "索拉利亞西鐵酒店", map: "ソラリア西鉄ホテル福岡" },
            { time: "12:00", title: "天神黒毛流 焼肉 参星", desc: "🍖 A5黑毛和牛商業午餐 ¥1,500~3,000", tag: "lunch", map: "天神黒毛流 焼肉 参星" },
            { time: "13:30", title: "櫛田神社", desc: "博多總鎮守・山笠發源地", map: "櫛田神社 福岡" },
            { time: "14:30", title: "川端商店街", desc: "福岡最古老商店街", map: "川端商店街" },
            { time: "15:30", title: "博多運河城", desc: "大型購物中心・噴泉表演", map: "キャナルシティ博多" },
            { time: "18:30", title: "博多もつ鍋 やま中", desc: "🍲 晚餐：牛腸鍋名店", tag: "food", map: "博多もつ鍋やま中 赤坂店" }
        ]
    },
    {
        day: 2, date: "2/9", weekday: "一", theme: "太宰府・柳川水鄉", icon: "⛩️", weather: "4-10°C 🌤️",
        schedule: [
            { time: "09:00", title: "西鐵福岡站", desc: "購買太宰府柳川套票 ¥3,150", map: "西鉄福岡駅" },
            { time: "10:00", title: "太宰府天滿宮", desc: "學問之神・菅原道真公", map: "太宰府天満宮" },
            { time: "10:30", title: "表參道", desc: "🍡 必吃梅枝餅", tag: "food", map: "太宰府天満宮 表参道" },
            { time: "12:30", title: "若松屋/元祖本吉屋", desc: "🍱 午餐：柳川籠蒸鰻魚飯", tag: "lunch", map: "柳川 若松屋" },
            { time: "14:00", title: "柳川遊船", desc: "約70分鐘搖櫓船", map: "柳川川下り" },
            { time: "18:00", title: "博多一雙", desc: "🍜 晚餐：濃厚豚骨拉麵", tag: "food", map: "博多一双 博多駅東本店" }
        ]
    },
    {
        day: 3, date: "2/10", weekday: "二", theme: "🤖 鋼彈朝聖日", icon: "🤖", weather: "5-11°C ☀️",
        schedule: [
            { time: "10:00", title: "LaLaport 福岡", desc: "全球最大RX-93ff ν鋼彈！", tag: "gundam", map: "ららぽーと福岡" },
            { time: "11:00", title: "GUNDAM SIDE-F", desc: "4F 核心區域・獨家周邊", tag: "gundam", map: "ガンダムパーク福岡" },
            { time: "12:30", title: "LaLaport美食廣場", desc: "🍖 午餐", tag: "lunch", map: "ららぽーと福岡" },
            { time: "14:00", title: "VS PARK WITH G", desc: "鋼彈主題體育娛樂", tag: "gundam", map: "VS PARK WITH G" },
            { time: "15:30", title: "namco遊樂區", desc: "街機・夾娃娃機", map: "ららぽーと福岡 namco" },
            { time: "17:30", title: "ν鋼彈夜間點燈", desc: "✨ 45週年限定燈光秀", tag: "gundam", map: "ららぽーと福岡" },
            { time: "19:00", title: "焼肉チャンピオン", desc: "🍖 晚餐：博多站高級燒肉", tag: "food", map: "焼肉チャンピオン 博多駅中央街" }
        ]
    },
    {
        day: 4, date: "2/11", weekday: "三", theme: "門司港・小倉懷舊", icon: "🚂", weather: "5-12°C ☁️",
        schedule: [
            { time: "09:00", title: "博多站", desc: "搭JR往門司港", map: "博多駅" },
            { time: "10:30", title: "門司港懷舊區", desc: "大正浪漫風情", map: "門司港レトロ" },
            { time: "12:00", title: "燒咖哩", desc: "🍛 午餐：門司港名物！", tag: "lunch", map: "門司港 焼きカレー" },
            { time: "13:30", title: "門司港展望室", desc: "360度港口美景", map: "門司港レトロ展望室" },
            { time: "15:00", title: "小倉城", desc: "北九州市的象徵", map: "小倉城" },
            { time: "16:30", title: "旦過市場", desc: "北九州的廚房", map: "旦過市場" },
            { time: "18:30", title: "博多華味鳥", desc: "🍲 晚餐：水炊鍋專門店", tag: "food", map: "博多華味鳥 天神店" }
        ]
    },
    {
        day: 5, date: "2/12", weekday: "四", theme: "海之中道・水族館", icon: "🐬", weather: "4-10°C 🌤️",
        schedule: [
            { time: "09:30", title: "博多站", desc: "搭JR香椎線", map: "博多駅" },
            { time: "10:30", title: "海洋世界 海之中道", desc: "九州最大水族館", map: "マリンワールド海の中道" },
            { time: "12:30", title: "水族館餐廳", desc: "🍱 午餐", tag: "lunch", map: "マリンワールド海の中道" },
            { time: "14:00", title: "海之中道海濱公園", desc: "可租自行車遊覽", map: "海の中道海浜公園" },
            { time: "17:00", title: "返回福岡", desc: "", map: "" },
            { time: "19:00", title: "博多達摩", desc: "🍜 晚餐：濃厚系拉麵", tag: "food", map: "博多だるま 総本店" }
        ]
    },
    {
        day: 6, date: "2/13", weekday: "五", theme: "福岡塔・百道海濱", icon: "🗼", weather: "5-11°C ☀️",
        schedule: [
            { time: "10:00", title: "福岡塔", desc: "日本最高海濱塔234m", map: "福岡タワー" },
            { time: "11:30", title: "海濱百道公園", desc: "海邊散步", map: "シーサイドももち海浜公園" },
            { time: "12:30", title: "俺の焼肉 博多", desc: "🍖 午餐：A5黑毛和牛", tag: "lunch", map: "俺の焼肉 博多" },
            { time: "14:00", title: "大濠公園", desc: "市中心綠洲・可租船", map: "大濠公園" },
            { time: "15:30", title: "福岡城跡", desc: "舞鶴公園・歷史遺跡", map: "福岡城跡" },
            { time: "18:00", title: "元祖博多めんたい重", desc: "🍱 晚餐：明太子料理", tag: "food", map: "元祖博多めんたい重" },
            { time: "19:30", title: "福岡塔夜景 🌃", desc: "✨ 234m展望台俯瞰百萬夜景", tag: "food", map: "福岡タワー" }
        ]
    },
    {
        day: 7, date: "2/14", weekday: "六", theme: "天神購物・中洲夜市", icon: "🛍️", weather: "5-12°C ☁️",
        schedule: [
            { time: "10:00", title: "天神地下街", desc: "150+店舖・歐風裝潢", map: "天神地下街" },
            { time: "12:00", title: "福岡焼肉 kintan", desc: "🍖 午餐：優質燒肉套餐", tag: "lunch", map: "焼肉kintan 福岡天神店" },
            { time: "13:30", title: "天神百貨區", desc: "大丸、PARCO、Bic Camera", map: "天神コア" },
            { time: "15:00", title: "回酒店休息", desc: "💕 情人節！", map: "" },
            { time: "18:00", title: "中洲屋台街", desc: "🏮 晚餐：路邊攤文化", tag: "food", map: "中洲屋台" },
            { time: "19:00", title: "小金ちゃん", desc: "招牌炒拉麵", tag: "food", map: "屋台 小金ちゃん" }
        ]
    },
    {
        day: 8, date: "2/15", weekday: "日", theme: "最後採買・賦歸", icon: "✈️", weather: "5-11°C ☁️",
        schedule: [
            { time: "09:00", title: "柳橋連合市場", desc: "博多的廚房・新鮮海產", map: "柳橋連合市場" },
            { time: "10:30", title: "Check-out", desc: "寄放行李", map: "ソラリア西鉄ホテル福岡" },
            { time: "11:00", title: "最後採買", desc: "藥妝・伴手禮", map: "ドン・キホーテ 天神" },
            { time: "12:00", title: "最後一餐拉麵", desc: "🍜 午餐", tag: "lunch", map: "一蘭 天神店" },
            { time: "14:00", title: "前往機場", desc: "預留充足時間", map: "福岡空港" },
            { time: "15:30", title: "福岡機場", desc: "免稅店採買", map: "福岡空港 国際線" },
            { time: "18:00", title: "班機起飛", desc: "再見福岡！👋", map: "" }
        ]
    }
];

// 美食資料（含焼肉チャンピオン）
const foodData = [
    { icon: "🍜", name: "豚骨拉麵", shops: "一蘭・一風堂・Shin-Shin" },
    { icon: "🍲", name: "牛腸鍋", shops: "やま中・もつ幸" },
    { icon: "🍲", name: "水炊鍋", shops: "博多華味鳥" },
    { icon: "🍱", name: "鰻魚飯", shops: "若松屋・本吉屋" },
    { icon: "🍖", name: "A5燒肉", shops: "参星・チャンピオン" },
    { icon: "🏮", name: "屋台", shops: "中洲屋台街" },
    { icon: "🍙", name: "明太子", shops: "めんたい重" },
    { icon: "🍡", name: "梅枝餅", shops: "太宰府表參道" }
];

// 飯店附近推薦（一蘭24小時・甜點）
const nearbyData = [
    {
        icon: "🍜",
        name: "一蘭 天神西通店",
        desc: "福岡代表豚骨拉麵・可調濃度辣度硬度",
        addr: "天神西通",
        tag: "24H營業",
        note: "超適合宵夜！距飯店步行5分鐘",
        map: "一蘭 天神西通店"
    },
    {
        icon: "🍎",
        name: "RINGO 蘋果派",
        desc: "現烤卡士達蘋果派・外酥內餡大塊蘋果",
        addr: "天神地下街西4",
        tag: "超人氣",
        note: "回飯店前的點心首選",
        map: "RINGO 天神地下街"
    },
    {
        icon: "🥞",
        name: "天神茶屋",
        desc: "法式薄餅可麗餅・冰淇淋咖啡",
        addr: "天神",
        tag: "親子友善",
        note: "午後散步甜點・有內用座位",
        map: "天神茶屋たばねのし"
    }
];

// 飯店附近購物店家
const shoppingData = [
    { 
        icon: "🪙", 
        name: "3COINS +plus", 
        desc: "300円均一雜貨・有食品區", 
        addr: "ミーナ天神 B1F",
        hours: "10:00-21:00",
        distance: "步行5-7分鐘",
        map: "3COINS plus ミーナ天神店"
    },
    { 
        icon: "📷", 
        name: "Bic Camera 2号館", 
        desc: "家電3C・藥妝・免稅", 
        addr: "天神2-4-5",
        hours: "10:00-21:00",
        distance: "步行2-3分鐘 ⭐最近",
        map: "ビックカメラ天神2号館"
    },
    { 
        icon: "📷", 
        name: "Bic Camera 1号館", 
        desc: "家電・眼鏡・自行車", 
        addr: "今泉1-25-1",
        hours: "10:00-21:00",
        distance: "步行5-7分鐘",
        map: "ビックカメラ天神1号館"
    }
];

// 100円商店資料
const hundredYenData = [
    {
        icon: "🔴",
        brand: "DAISO",
        name: "ラシック福岡天神店",
        addr: "ラシック内",
        hours: "10:00-20:00",
        tag: "3品牌複合",
        map: "DAISO ラシック福岡天神店"
    },
    {
        icon: "🔴",
        brand: "DAISO",
        name: "イオンショッパーズ福岡店",
        addr: "イオン4F",
        hours: "9:00-21:00",
        tag: "最早開",
        map: "DAISO イオンショッパーズ福岡店"
    },
    {
        icon: "🟢",
        brand: "Seria",
        name: "ミーナ天神店",
        addr: "ミーナ6F",
        hours: "10:00-21:00",
        tag: "大型店",
        map: "セリア ミーナ天神店"
    },
    {
        icon: "🟡",
        brand: "Can Do",
        name: "天神店",
        addr: "新天町地下ファーボ",
        hours: "10:00-20:00",
        tag: "",
        map: "キャンドゥ 天神店"
    }
];

// 藥妝店資料（優惠排行）
const drugstoreData = [
    {
        icon: "🥇",
        name: "ダイコクドラッグ 天神西通り店",
        desc: "免稅10%＋最高8%折扣券",
        addr: "天神西通",
        hours: "9:00-23:00",
        tag: "最便宜",
        map: "ダイコクドラッグ 天神西通り店"
    },
    {
        icon: "🥈",
        name: "唐吉訶德 天神本店",
        desc: "「地區最安價」・商品超多",
        addr: "天神2-6-35",
        hours: "24小時",
        tag: "24H營業",
        map: "ドン・キホーテ福岡天神本店"
    },
    {
        icon: "🥉",
        name: "マツモトキヨシ 天神地下街",
        desc: "品項齊全・免稅對應・5%券",
        addr: "天神地下街",
        hours: "10:00-21:00",
        tag: "品項齊全",
        map: "マツモトキヨシ 天神地下街"
    },
    {
        icon: "💊",
        name: "ココカラファイン PARCO",
        desc: "醫藥品・健康食品・化妝品",
        addr: "福岡PARCO新館B1F",
        hours: "10:00-21:00",
        tag: "免稅對應",
        map: "ココカラファイン 福岡パルコ新館"
    },
    {
        icon: "💊",
        name: "ドラッグ新生堂 天神南店",
        desc: "在地連鎖・營業至23時",
        addr: "天神南",
        hours: "9:00-23:00",
        tag: "營業到晚",
        map: "ドラッグ新生堂 天神南店"
    }
];

// 福岡必吃甜點與咖啡
const dessertData = [
    { 
        icon: "🧀", 
        name: "BAKE CHEESE TART", 
        desc: "濃起司卡士達・外皮酥脆", 
        addr: "天神地下街",
        tag: "下午茶首選",
        map: "BAKE CHEESE TART 天神地下街"
    },
    { 
        icon: "🍡", 
        name: "鈴懸", 
        desc: "福岡老字號和菓子・生銅鑼燒", 
        addr: "博多站/天神百貨",
        tag: "伴手禮必買",
        map: "鈴懸 博多駅"
    },
    { 
        icon: "🍞", 
        name: "八天堂", 
        desc: "冷藏奶油麵包・濕潤綿密", 
        addr: "博多站商場",
        tag: "小朋友愛",
        map: "八天堂 博多駅"
    },
    { 
        icon: "🍓", 
        name: "伊都きんぐ", 
        desc: "甘王草莓銅鑼燒・草莓控必試", 
        addr: "博多站AMU",
        tag: "草莓控",
        map: "伊都きんぐ 博多マイング"
    },
    { 
        icon: "☕", 
        name: "BLUE BOTTLE", 
        desc: "福岡天神店・警固神社旁", 
        addr: "天神警固神社旁",
        tag: "8:00-20:00",
        map: "ブルーボトルコーヒー 福岡天神カフェ"
    },
    { 
        icon: "🥧", 
        name: "博多風美庵", 
        desc: "甘王草莓夾心餅・包裝漂亮", 
        addr: "機場/博多站",
        tag: "送禮首選",
        map: "博多風美庵"
    },
    { 
        icon: "🍩", 
        name: "I'm donut?", 
        desc: "超人氣生甜甜圈！蓬鬆Q彈", 
        addr: "天神渡邊通",
        tag: "排隊名店",
        map: "I'm donut 福岡"
    },
    { 
        icon: "🥐", 
        name: "三日月屋", 
        desc: "天然酵母可頌・10+種口味", 
        addr: "博多站",
        tag: "可頌必買",
        map: "三日月屋 博多駅店"
    }
];

// 必買伴手禮（整合更新）
const souvenirData = [
    { icon: "🍙", name: "博多通りもん", desc: "福岡代表銘菓・奶油白豆沙", where: "機場/車站/百貨" },
    { icon: "🍡", name: "筑紫もち", desc: "如水庵・淋黑糖蜜裹黃豆粉", where: "機場/博多站" },
    { icon: "🍪", name: "めんべい", desc: "明太子仙貝・鹹香微辣", where: "機場/博多站" },
    { icon: "🎭", name: "二◯加煎餅", desc: "千鳥屋・造型有趣", where: "機場/百貨" },
    { icon: "🧈", name: "Press Butter Sand", desc: "博多限定甘王草莓口味", where: "博多站/機場" },
    { icon: "🍓", name: "甘王草莓系列", desc: "餅乾蛋糕果凍・博多限定", where: "機場/博多站" },
    { icon: "🍫", name: "博多の石畳", desc: "抹茶巧克力蛋糕", where: "博多站AMU" },
    { icon: "🐤", name: "ひよ子蛋糕", desc: "小雞造型・黃豆沙", where: "機場/博多站" }
];

// 地鐵交通資料
const metroData = {
    stations: [
        { line: "🟠 空港線", name: "天神駅", exit: "5號/6a號出口", distance: "步行3分鐘", note: "最近！" },
        { line: "🟢 七隈線", name: "天神南駅", exit: "西8出口", distance: "步行5分鐘", note: "往藥院" },
        { line: "🚃 西鐵電車", name: "西鉄福岡駅", exit: "—", distance: "直結", note: "往太宰府" }
    ],
    routes: [
        { dest: "福岡機場", line: "🟠", time: "11分", fare: "¥260" },
        { dest: "博多站", line: "🟠", time: "5分", fare: "¥210" },
        { dest: "中洲川端（屋台）", line: "🟠", time: "3分", fare: "¥210" },
        { dest: "大濠公園", line: "🟠", time: "5分", fare: "¥210" },
        { dest: "唐人町（福岡塔巴士）", line: "🟠", time: "7分", fare: "¥260" },
        { dest: "藥院（甜點街）", line: "🟢", time: "4分", fare: "¥210" }
    ],
    tickets: [
        { name: "單程票", price: "¥210~380", note: "依距離" },
        { name: "1日乘車券", price: "¥640", note: "3次以上划算！" },
        { name: "信用卡觸碰", price: "上限¥640", note: "超過自動變1日券" }
    ]
};

// 周遊券資料
const passData = [
    {
        icon: "🏆",
        name: "太宰府・柳川觀光套票",
        price: "¥3,210~3,380",
        includes: "天神⇄太宰府⇄柳川電車 + 柳川遊船",
        useDay: "Day 3（太宰府＋柳川）",
        save: "省約 ¥1,000~1,500",
        recommended: true
    },
    {
        icon: "🚇",
        name: "地下鐵 1日乘車券",
        price: "¥640",
        includes: "全3線無限搭乘",
        useDay: "搭3次以上的日子",
        save: "單程 ¥210 × 3 = ¥630",
        recommended: false
    },
    {
        icon: "🚕",
        name: "機場⇄天神 計程車",
        price: "¥3,000~3,500",
        includes: "約20-30分車程・直達飯店",
        useDay: "Day 1 抵達",
        save: "有小孩/行李最方便",
        recommended: true
    }
];

// 夜生活推薦
const nightlifeData = {
    izakaya: [
        { icon: "🍜", name: "小金ちゃん", desc: "焼きラーメン發源地", loc: "天神", map: "屋台 小金ちゃん", tag: "必吃" },
        { icon: "🍲", name: "一慶 西中洲店", desc: "隱藏版炙燒牛腸鍋", loc: "中洲", map: "一慶 西中洲店", tag: "牛腸鍋" },
        { icon: "🐟", name: "せいもん払い", desc: "新鮮刺身海鮮", loc: "中洲", map: "せいもん払い 中洲", tag: "海鮮" },
        { icon: "🔥", name: "藁焼 みかん", desc: "藁焼鰹魚・和風居酒屋", loc: "天神", map: "藁焼 みかん 天神", tag: "藁焼" }
    ],
    bars: [
        { icon: "🥃", name: "ハート・ストリングス", desc: "30年老舗・No Charge", loc: "中洲", map: "ハートストリングス 中洲", tag: "老舗" },
        { icon: "🍸", name: "Bar Oscar", desc: "日本冠軍調酒師・「日ノ和」必點", loc: "天神赤坂", map: "バー オスカー 赤坂", tag: "人氣" },
        { icon: "🥂", name: "ハイボールバー 1923", desc: "高級Highball・看中洲夜景", loc: "中洲", map: "ハイボールバー 中洲1923", tag: "夜景" }
    ]
};

// 親子友善廁所資料
const babyRoomData = {
    tenjin: [
        { name: "岩田屋本店", floor: "本館6F", diaper: 3, nursing: 4, extras: ["熱水", "微波爐", "離乳食販賣機", "Stokke椅"], recommended: true, map: "岩田屋本店 福岡" },
        { name: "天神地下街", floor: "南端12番街", diaper: 2, nursing: 2, extras: ["熱水80°C", "自動門"], recommended: false, map: "天神地下街 授乳室" },
        { name: "大丸福岡天神店", floor: "本館7F", diaper: 2, nursing: 2, extras: ["乾淨"], recommended: false, map: "大丸福岡天神店" },
        { name: "福岡PARCO", floor: "本館6F", diaper: 2, nursing: 2, extras: ["可愛插畫"], recommended: false, map: "福岡パルコ" }
    ],
    hakata: [
        { name: "博多阪急", floor: "7F", diaper: 9, nursing: 4, extras: ["熱水", "微波爐", "尿布販賣機", "保健師"], recommended: true, map: "博多阪急" },
        { name: "デイトス", floor: "B1F", diaper: 3, nursing: 3, extras: ["可丟用過尿布"], recommended: false, map: "デイトス 博多" },
        { name: "KITTE博多", floor: "6F/10F", diaper: 2, nursing: 2, extras: ["嬰兒床"], recommended: false, map: "KITTE博多" }
    ]
};


// 行李清單
const packingData = {
    "👕 衣物": ["厚羽絨外套", "毛衣x3", "長褲x3", "發熱衣x4", "圍巾", "手套", "毛帽"],
    "🧴 盥洗": ["牙刷牙膏", "洗面乳", "保養品", "防曬"],
    "📱 電子": ["手機充電器", "行動電源", "轉接頭", "WiFi機"],
    "📄 證件": ["護照", "機票", "訂房確認", "日幣現金", "信用卡"],
    "💊 藥品": ["常備藥", "OK繃", "腸胃藥"]
};

// 記帳類別
const expenseCategories = [
    { id: 'food', icon: '🍜', name: '餐飲' },
    { id: 'transport', icon: '🚃', name: '交通' },
    { id: 'shopping', icon: '🛍️', name: '購物' },
    { id: 'ticket', icon: '🎫', name: '門票' },
    { id: 'hotel', icon: '🏨', name: '住宿' },
    { id: 'other', icon: '📦', name: '其他' }
];

// ===== APP 初始化 =====
let currentDay = 0;
let expenses = JSON.parse(localStorage.getItem('fukuoka-expenses') || '[]');

document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    renderFlights();
    renderHotel();
    renderDaySelector();
    renderDayDetail(0);
    renderFoodScroll();
    addNearbySection();
    addSouvenirSection();
    addShoppingSection();
    addDrugstoreSection();
    add100YenSection();
    addDessertSection();
    addMetroSection();
    renderPacking();
    initBottomNav();
    updateProgress();
    addExpenseSection();
    addSplitBillSection();
    addNightlifeSection();
    addBabyRoomSection();
    addEmergencySection();
    addPhrasesSection();
});

// ===== 倒數計時 =====
function initCountdown() {
    updateCountdown();
    setInterval(updateCountdown, 60000);
}

function updateCountdown() {
    const now = new Date();
    const diff = TRIP_START - now;
    
    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        document.getElementById('countDays').textContent = days;
        document.getElementById('countHours').textContent = hours;
        document.getElementById('countMins').textContent = mins;
    } else {
        document.getElementById('countDays').textContent = '🎉';
        document.getElementById('countHours').textContent = '旅';
        document.getElementById('countMins').textContent = '行中';
    }
}

// ===== 航班 =====
function renderFlights() {
    const container = document.getElementById('flightCards');
    container.innerHTML = `
        <div class="flight-card">
            <div class="flight-header">
                <span class="flight-type">去程</span>
                <span class="airline">🐯 台灣虎航 IT240</span>
            </div>
            <div class="flight-route">
                <div class="airport"><span class="time">06:45</span><span class="code">TPE</span><span class="name">桃園 T1</span></div>
                <div class="flight-line"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg></div>
                <div class="airport"><span class="time">10:00</span><span class="code">FUK</span><span class="name">福岡</span></div>
            </div>
            <div class="flight-date">2026/02/08 (日)</div>
        </div>
        <div class="flight-card return">
            <div class="flight-header">
                <span class="flight-type">回程</span>
                <span class="airline">✈️ 亞洲航空 AK1511</span>
            </div>
            <div class="flight-route">
                <div class="airport"><span class="time">18:00</span><span class="code">FUK</span><span class="name">福岡</span></div>
                <div class="flight-line"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg></div>
                <div class="airport"><span class="time">19:30</span><span class="code">TPE</span><span class="name">桃園</span></div>
            </div>
            <div class="flight-date">2026/02/15 (日)</div>
        </div>
    `;
}

// ===== 酒店 =====
function renderHotel() {
    const container = document.getElementById('hotelCard');
    container.innerHTML = `
        <div class="hotel-main">
            <div class="hotel-info">
                <h3>福岡索拉利亞西鐵酒店</h3>
                <p class="en">Solaria Nishitetsu Hotel Fukuoka</p>
                <p class="addr">📍 福岡市中央區天神2-2-43</p>
            </div>
        </div>
        <div class="hotel-actions">
            <a href="https://www.google.com/maps/search/?api=1&query=ソラリア西鉄ホテル福岡" target="_blank" class="btn btn-secondary">🗺️ 地圖</a>
            <a href="tel:+81-92-752-5555" class="btn btn-ghost">📞 電話</a>
        </div>
        
        <div class="backup-hotel">
            <p class="backup-label">📋 備案飯店</p>
            <div class="hotel-main backup">
                <div class="hotel-info">
                    <h3>Richmond Hotel 福岡天神</h3>
                    <p class="en">Richmond Hotels Fukuoka Tenjin</p>
                    <p class="addr">📍 福岡市中央區渡邊通4-8-25</p>
                    <p class="backup-note">🚇 七隈線天神南站步行3分・三越對面</p>
                </div>
            </div>
            <div class="hotel-actions">
                <a href="https://www.google.com/maps/search/?api=1&query=リッチモンドホテル福岡天神" target="_blank" class="btn btn-accent btn-sm">🗺️ 地圖</a>
                <a href="tel:+81-92-739-2855" class="btn btn-ghost btn-sm">📞 電話</a>
            </div>
        </div>
    `;
}

// ===== 日期選擇 =====
function renderDaySelector() {
    const container = document.getElementById('daySelector');
    container.innerHTML = itineraryData.map((d, i) => `
        <button class="day-btn ${i === 0 ? 'active' : ''}" onclick="selectDay(${i})">
            <span class="num">D${d.day}</span>
            <span class="date">${d.date}</span>
        </button>
    `).join('');
}

function selectDay(index) {
    currentDay = index;
    document.querySelectorAll('.day-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
    renderDayDetail(index);
    updateProgress();
}

// ===== 行程詳情 =====
function renderDayDetail(index) {
    const day = itineraryData[index];
    const container = document.getElementById('dayDetail');
    const checked = JSON.parse(localStorage.getItem('fukuoka-checked') || '{}');
    
    container.innerHTML = `
        <div class="day-header">
            <span class="day-icon">${day.icon}</span>
            <div class="day-meta">
                <h3>Day ${day.day} - ${day.theme}</h3>
                <p>${day.date} (${day.weekday})</p>
                <p class="weather">${day.weather}</p>
            </div>
        </div>
        <div class="schedule-list">
            ${day.schedule.map((item, i) => {
                const key = `d${day.day}-${i}`;
                const isChecked = checked[key];
                const tagHtml = item.tag === 'lunch' ? '<span class="tag tag-lunch">午餐</span>' :
                               item.tag === 'food' ? '<span class="tag tag-food">美食</span>' :
                               item.tag === 'gundam' ? '<span class="tag tag-gundam">鋼彈</span>' : '';
                const mapHtml = item.map ? `
                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.map)}" 
                       target="_blank" class="map-link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        導航
                    </a>` : '';
                
                return `
                    <div class="schedule-item">
                        <span class="schedule-time">${item.time}</span>
                        <div class="schedule-body">
                            <div class="schedule-title">${item.title} ${tagHtml}</div>
                            <p class="schedule-desc">${item.desc}</p>
                            <div class="schedule-actions">${mapHtml}</div>
                        </div>
                        <button class="check-btn ${isChecked ? 'checked' : ''}" onclick="toggleCheck('${key}', this)">✓</button>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function toggleCheck(key, btn) {
    const checked = JSON.parse(localStorage.getItem('fukuoka-checked') || '{}');
    checked[key] = !checked[key];
    localStorage.setItem('fukuoka-checked', JSON.stringify(checked));
    btn.classList.toggle('checked');
    updateProgress();
}

function updateProgress() {
    const checked = JSON.parse(localStorage.getItem('fukuoka-checked') || '{}');
    const day = itineraryData[currentDay];
    const total = day.schedule.length;
    let done = 0;
    day.schedule.forEach((_, i) => {
        if (checked[`d${day.day}-${i}`]) done++;
    });
    const pct = total > 0 ? (done / total) * 100 : 0;
    document.getElementById('progressFill').style.width = `${pct}%`;
}

// ===== 美食 =====
function renderFoodScroll() {
    const container = document.getElementById('foodScroll');
    container.innerHTML = foodData.map(f => `
        <div class="food-card">
            <div class="food-icon">${f.icon}</div>
            <h4>${f.name}</h4>
            <p>${f.shops}</p>
        </div>
    `).join('');
}

// ===== 行李清單 =====
function renderPacking() {
    const container = document.getElementById('packingGrid');
    const checked = JSON.parse(localStorage.getItem('fukuoka-packing') || '{}');
    
    container.innerHTML = Object.entries(packingData).map(([cat, items]) => `
        <div class="packing-category">
            <h4>${cat}</h4>
            <div class="packing-items">
                ${items.map(item => {
                    const key = `p-${item}`;
                    const isChecked = checked[key];
                    return `
                        <label class="packing-item ${isChecked ? 'checked' : ''}" onclick="togglePacking('${key}', this)">
                            <span class="packing-check">✓</span>
                            <span>${item}</span>
                        </label>
                    `;
                }).join('')}
            </div>
        </div>
    `).join('');
    
    updatePackingProgress();
}

function togglePacking(key, label) {
    const checked = JSON.parse(localStorage.getItem('fukuoka-packing') || '{}');
    checked[key] = !checked[key];
    localStorage.setItem('fukuoka-packing', JSON.stringify(checked));
    label.classList.toggle('checked');
    updatePackingProgress();
}

function updatePackingProgress() {
    const checked = JSON.parse(localStorage.getItem('fukuoka-packing') || '{}');
    const total = Object.values(packingData).flat().length;
    const done = Object.values(checked).filter(v => v).length;
    document.getElementById('packingCount').textContent = `${done}/${total}`;
    document.getElementById('packingFill').style.width = `${(done/total)*100}%`;
}

// ===== 底部導航 =====
function initBottomNav() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');
        });
    });
}

// ===== 記帳功能 =====
function addExpenseSection() {
    const mainContent = document.querySelector('.main-content');
    const packingSection = document.getElementById('packing');
    
    const expenseSection = document.createElement('section');
    expenseSection.className = 'section';
    expenseSection.id = 'expense';
    expenseSection.innerHTML = `
        <h2 class="section-title"><span class="title-icon">💰</span>旅遊記帳</h2>
        <div class="expense-summary" id="expenseSummary"></div>
        <button class="btn btn-primary add-expense-btn" onclick="openExpenseModal()">+ 新增支出</button>
        <div class="expense-list" id="expenseList"></div>
    `;
    
    mainContent.insertBefore(expenseSection, packingSection);
    renderExpenses();
    
    // 新增記帳 Modal
    const modal = document.createElement('div');
    modal.id = 'expenseModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>新增支出</h3>
                <button class="modal-close" onclick="closeExpenseModal()">×</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>日期</label>
                    <select id="expenseDay">
                        ${itineraryData.map(d => `<option value="${d.day}">Day ${d.day} (${d.date})</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label>類別</label>
                    <div class="category-grid">
                        ${expenseCategories.map(c => `
                            <label class="category-option">
                                <input type="radio" name="category" value="${c.id}">
                                <span>${c.icon} ${c.name}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
                <div class="form-group">
                    <label>金額 (¥)</label>
                    <input type="number" id="expenseAmount" placeholder="0" inputmode="numeric">
                </div>
                <div class="form-group">
                    <label>備註</label>
                    <input type="text" id="expenseNote" placeholder="例：一蘭拉麵">
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-ghost" onclick="closeExpenseModal()">取消</button>
                <button class="btn btn-primary" onclick="saveExpense()">儲存</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // 新增記帳樣式
    const style = document.createElement('style');
    style.textContent = `
        .expense-summary {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            margin-bottom: 16px;
        }
        .summary-card {
            background: var(--bg-card);
            border-radius: var(--radius-sm);
            padding: 16px;
            text-align: center;
            border: 1px solid var(--border);
        }
        .summary-card .amount {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary);
        }
        .summary-card .label {
            font-size: 0.75rem;
            color: var(--text-muted);
        }
        .summary-card .twd {
            font-size: 0.8rem;
            color: var(--text-secondary);
        }
        .add-expense-btn {
            width: 100%;
            margin-bottom: 16px;
        }
        .expense-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        .expense-item {
            display: flex;
            align-items: center;
            gap: 12px;
            background: var(--bg-card);
            border-radius: var(--radius-sm);
            padding: 14px;
            border: 1px solid var(--border);
        }
        .expense-icon {
            font-size: 1.5rem;
        }
        .expense-info {
            flex: 1;
        }
        .expense-info .name {
            font-weight: 500;
        }
        .expense-info .meta {
            font-size: 0.75rem;
            color: var(--text-muted);
        }
        .expense-amount {
            text-align: right;
        }
        .expense-amount .jpy {
            font-weight: 700;
            color: var(--accent);
        }
        .expense-amount .twd {
            font-size: 0.75rem;
            color: var(--text-muted);
        }
        .expense-delete {
            background: none;
            border: none;
            color: var(--text-muted);
            cursor: pointer;
            padding: 8px;
            font-size: 1.2rem;
        }
        .expense-delete:hover {
            color: var(--primary);
        }
        
        /* Modal */
        .modal {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.7);
            backdrop-filter: blur(4px);
            z-index: 200;
            align-items: flex-end;
            justify-content: center;
        }
        .modal.open {
            display: flex;
        }
        .modal-content {
            background: var(--bg-card);
            border-radius: var(--radius) var(--radius) 0 0;
            width: 100%;
            max-width: 500px;
            max-height: 90vh;
            overflow-y: auto;
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            border-bottom: 1px solid var(--border);
        }
        .modal-header h3 {
            font-size: 1.1rem;
        }
        .modal-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--text-muted);
            cursor: pointer;
        }
        .modal-body {
            padding: 20px;
        }
        .modal-footer {
            display: flex;
            gap: 12px;
            padding: 20px;
            border-top: 1px solid var(--border);
        }
        .modal-footer .btn {
            flex: 1;
        }
        .form-group {
            margin-bottom: 20px;
        }
        .form-group label {
            display: block;
            font-size: 0.85rem;
            color: var(--text-secondary);
            margin-bottom: 8px;
        }
        .form-group input, .form-group select {
            width: 100%;
            padding: 12px 16px;
            background: var(--bg-elevated);
            border: 1px solid var(--border);
            border-radius: var(--radius-sm);
            color: var(--text-primary);
            font-size: 1rem;
        }
        .form-group input:focus, .form-group select:focus {
            outline: none;
            border-color: var(--primary);
        }
        .category-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
        }
        .category-option {
            cursor: pointer;
        }
        .category-option input {
            display: none;
        }
        .category-option span {
            display: block;
            padding: 12px 8px;
            text-align: center;
            background: var(--bg-elevated);
            border: 1px solid var(--border);
            border-radius: var(--radius-sm);
            font-size: 0.85rem;
            transition: all 0.2s;
        }
        .category-option input:checked + span {
            background: var(--primary);
            border-color: var(--primary);
        }
        .no-expenses {
            text-align: center;
            padding: 40px 20px;
            color: var(--text-muted);
        }
    `;
    document.head.appendChild(style);
}

function renderExpenses() {
    const summary = document.getElementById('expenseSummary');
    const list = document.getElementById('expenseList');
    
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);
    const byCategory = {};
    expenseCategories.forEach(c => byCategory[c.id] = 0);
    expenses.forEach(e => byCategory[e.category] = (byCategory[e.category] || 0) + e.amount);
    
    summary.innerHTML = `
        <div class="summary-card">
            <div class="amount">¥${total.toLocaleString()}</div>
            <div class="label">總支出</div>
            <div class="twd">≈ NT$${Math.round(total * JPY_TO_TWD).toLocaleString()}</div>
        </div>
        <div class="summary-card">
            <div class="amount">${expenses.length}</div>
            <div class="label">筆記錄</div>
        </div>
    `;
    
    if (expenses.length === 0) {
        list.innerHTML = '<div class="no-expenses">尚無支出記錄<br>點擊上方按鈕新增</div>';
        return;
    }
    
    list.innerHTML = expenses.sort((a, b) => b.id - a.id).map(e => {
        const cat = expenseCategories.find(c => c.id === e.category) || { icon: '📦', name: '其他' };
        return `
            <div class="expense-item">
                <span class="expense-icon">${cat.icon}</span>
                <div class="expense-info">
                    <div class="name">${e.note || cat.name}</div>
                    <div class="meta">Day ${e.day} · ${cat.name}</div>
                </div>
                <div class="expense-amount">
                    <div class="jpy">¥${e.amount.toLocaleString()}</div>
                    <div class="twd">≈ NT$${Math.round(e.amount * JPY_TO_TWD)}</div>
                </div>
                <button class="expense-delete" onclick="deleteExpense(${e.id})">×</button>
            </div>
        `;
    }).join('');
}

function openExpenseModal() {
    document.getElementById('expenseModal').classList.add('open');
    document.getElementById('expenseDay').value = currentDay + 1;
}

function closeExpenseModal() {
    document.getElementById('expenseModal').classList.remove('open');
    document.getElementById('expenseAmount').value = '';
    document.getElementById('expenseNote').value = '';
    document.querySelectorAll('input[name="category"]').forEach(r => r.checked = false);
}

function saveExpense() {
    const day = parseInt(document.getElementById('expenseDay').value);
    const category = document.querySelector('input[name="category"]:checked')?.value;
    const amount = parseInt(document.getElementById('expenseAmount').value);
    const note = document.getElementById('expenseNote').value.trim();
    
    if (!category || !amount || amount <= 0) {
        alert('請選擇類別並輸入金額');
        return;
    }
    
    expenses.push({
        id: Date.now(),
        day,
        category,
        amount,
        note
    });
    
    localStorage.setItem('fukuoka-expenses', JSON.stringify(expenses));
    closeExpenseModal();
    renderExpenses();
}

function deleteExpense(id) {
    if (confirm('確定刪除此筆支出？')) {
        expenses = expenses.filter(e => e.id !== id);
        localStorage.setItem('fukuoka-expenses', JSON.stringify(expenses));
        renderExpenses();
    }
}

// ===== 緊急資訊 =====
function addEmergencySection() {
    const mainContent = document.querySelector('.main-content');
    
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'emergency';
    section.innerHTML = `
        <h2 class="section-title"><span class="title-icon">🆘</span>緊急資訊</h2>
        <div class="emergency-grid">
            <a href="tel:110" class="emergency-card">
                <span class="em-icon">🚔</span>
                <span class="em-name">警察</span>
                <span class="em-num">110</span>
            </a>
            <a href="tel:119" class="emergency-card">
                <span class="em-icon">🚑</span>
                <span class="em-name">消防/救護</span>
                <span class="em-num">119</span>
            </a>
            <a href="tel:+81-92-771-0461" class="emergency-card">
                <span class="em-icon">🏥</span>
                <span class="em-name">福岡市急救</span>
                <span class="em-num">092-771-0461</span>
            </a>
            <a href="tel:+81-92-751-2121" class="emergency-card">
                <span class="em-icon">🇹🇼</span>
                <span class="em-name">台北駐福岡辦事處</span>
                <span class="em-num">092-751-2121</span>
            </a>
        </div>
        <div class="emergency-note">
            <p>📍 台北駐福岡經濟文化辦事處</p>
            <p>地址：福岡市中央區桜坂3-12-42</p>
            <p>緊急聯絡：+81-92-734-2810 (24小時)</p>
        </div>
        
        <h3 class="sub-section-title">💊 藥品購買（猛健樂ミノキシジル）</h3>
        <div class="pharmacy-list">
            <div class="pharmacy-card">
                <div class="pharm-main">
                    <span class="pharm-icon">💊</span>
                    <div class="pharm-info">
                        <h4>リアップX5 / リグロEX5（5%外用）</h4>
                        <p>💰 約 ¥5,940~5,980（60ml/30日份）</p>
                        <p>第一類醫藥品・無需處方</p>
                        <p class="pharm-note">⚠️ 需向藥劑師說明購買</p>
                    </div>
                </div>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=ビックカメラ天神2号館" 
               target="_blank" class="pharmacy-card clickable">
                <div class="pharm-main">
                    <span class="pharm-icon">🏪</span>
                    <div class="pharm-info">
                        <h4>Bic Camera 天神2号館</h4>
                        <p>藥妝區有販售・步行2-3分鐘</p>
                    </div>
                    <span class="pharm-arrow">→</span>
                </div>
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=ドン・キホーテ天神店" 
               target="_blank" class="pharmacy-card clickable">
                <div class="pharm-main">
                    <span class="pharm-icon">🏪</span>
                    <div class="pharm-info">
                        <h4>唐吉訶德 天神店</h4>
                        <p>藥妝區有販售・營業至深夜</p>
                    </div>
                    <span class="pharm-arrow">→</span>
                </div>
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=マツモトキヨシ天神" 
               target="_blank" class="pharmacy-card clickable">
                <div class="pharm-main">
                    <span class="pharm-icon">💊</span>
                    <div class="pharm-info">
                        <h4>松本清藥妝 天神</h4>
                        <p>連鎖藥妝店・種類齊全</p>
                    </div>
                    <span class="pharm-arrow">→</span>
                </div>
            </a>
        </div>
        
        <h3 class="sub-section-title">💉 猛健樂 Mounjaro（マンジャロ）處方診所</h3>
        <p class="clinic-note">⚠️ 需醫師處方・每週1次皮下注射・減肥用</p>
        <div class="pharmacy-list">
            <a href="https://www.google.com/maps/search/?api=1&query=クララ美容皮膚科+福岡天神院" 
               target="_blank" class="pharmacy-card clickable">
                <div class="pharm-main">
                    <span class="pharm-icon">🏥</span>
                    <div class="pharm-info">
                        <h4>クララ美容皮膚科 天神院</h4>
                        <p>💰 2.5mg ¥4,400起・診察料免費</p>
                        <p class="clinic-tag">📍 天神站旁・有注射教學</p>
                    </div>
                    <span class="pharm-arrow">→</span>
                </div>
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=東郷美容形成外科+福岡" 
               target="_blank" class="pharmacy-card clickable">
                <div class="pharm-main">
                    <span class="pharm-icon">🏥</span>
                    <div class="pharm-info">
                        <h4>東郷美容形成外科</h4>
                        <p>💰 初回 ¥4,400・2回目 ¥5,500</p>
                        <p class="clinic-tag">📍 博多站步行3分・可郵寄</p>
                    </div>
                    <span class="pharm-arrow">→</span>
                </div>
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=クリニーク福岡天神" 
               target="_blank" class="pharmacy-card clickable">
                <div class="pharm-main">
                    <span class="pharm-icon">🏥</span>
                    <div class="pharm-info">
                        <h4>クリニーク福岡天神</h4>
                        <p>💰 多款GLP-1可選・可散買</p>
                        <p class="clinic-tag">📍 天神站步行5分</p>
                    </div>
                    <span class="pharm-arrow">→</span>
                </div>
            </a>
        </div>
        <div class="mounjaro-note">
            <p>📋 <strong>帶回台灣須知</strong></p>
            <p>• 針劑需醫師處方箋（必備）</p>
            <p>• 最多攜帶 6 個月用量</p>
            <p>• 需 2-8°C 冷藏保存（帶保冷袋）</p>
        </div>
    `;
    
    mainContent.appendChild(section);
    
    const style = document.createElement('style');
    style.textContent = `
        .emergency-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            margin-bottom: 16px;
        }
        .emergency-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            padding: 16px;
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--radius-sm);
            text-decoration: none;
            color: var(--text-primary);
            transition: all 0.2s;
        }
        .emergency-card:hover {
            background: var(--bg-elevated);
            border-color: var(--primary);
        }
        .em-icon { font-size: 1.5rem; }
        .em-name { font-size: 0.8rem; color: var(--text-secondary); }
        .em-num { font-size: 0.9rem; font-weight: 600; color: var(--secondary); }
        .emergency-note {
            background: var(--bg-card);
            border-radius: var(--radius-sm);
            padding: 16px;
            border: 1px solid var(--border);
            font-size: 0.85rem;
            color: var(--text-secondary);
        }
        .emergency-note p { margin-bottom: 4px; }
        .sub-section-title {
            font-size: 1rem;
            font-weight: 900;
            margin: 20px 0 12px;
            color: var(--text-primary);
        }
        .pharmacy-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .pharmacy-card {
            background: var(--bg-card);
            border-radius: var(--radius-sm);
            padding: 12px 16px;
            border: var(--border-width) solid var(--border);
            box-shadow: 3px 3px 0px var(--border);
            text-decoration: none;
            color: var(--text-primary);
        }
        .pharmacy-card.clickable:hover {
            background: var(--bg-elevated);
            transform: translateX(4px);
        }
        .pharm-main {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .pharm-icon { font-size: 1.8rem; }
        .pharm-info { flex: 1; }
        .pharm-info h4 { font-size: 0.95rem; font-weight: 900; margin-bottom: 2px; }
        .pharm-info p { font-size: 0.8rem; color: var(--text-secondary); }
        .pharm-note { color: var(--orange) !important; font-weight: 700; }
        .pharm-arrow { font-size: 1.2rem; color: var(--secondary); font-weight: 900; }
        .clinic-note {
            font-size: 0.8rem;
            color: var(--orange);
            font-weight: 700;
            margin-bottom: 12px;
        }
        .clinic-tag {
            color: var(--secondary) !important;
            font-weight: 700;
        }
        .mounjaro-note {
            background: linear-gradient(135deg, var(--pink) 0%, var(--secondary) 100%);
            border-radius: var(--radius);
            padding: 14px 16px;
            margin-top: 12px;
            color: white;
            font-size: 0.8rem;
            border: var(--border-width) solid var(--border);
        }
        .mounjaro-note strong { font-weight: 900; }
        .mounjaro-note p { margin-bottom: 4px; }
    `;
    document.head.appendChild(style);
}

// ===== 實用日語 =====
function addPhrasesSection() {
    const emergencySection = document.getElementById('emergency');
    
    const phrases = [
        { jp: 'すみません', read: 'Sumimasen', tw: '不好意思/對不起' },
        { jp: 'ありがとうございます', read: 'Arigatou gozaimasu', tw: '非常感謝' },
        { jp: 'これをください', read: 'Kore wo kudasai', tw: '請給我這個' },
        { jp: 'いくらですか？', read: 'Ikura desu ka?', tw: '多少錢？' },
        { jp: 'お会計お願いします', read: 'Okaikei onegaishimasu', tw: '請結帳' },
        { jp: 'トイレはどこですか？', read: 'Toire wa doko desu ka?', tw: '廁所在哪裡？' },
        { jp: '写真を撮ってもいいですか？', read: 'Shashin wo tottemo ii desu ka?', tw: '可以拍照嗎？' },
        { jp: '〇〇駅はどこですか？', read: '〇〇 eki wa doko desu ka?', tw: '〇〇站在哪裡？' },
        { jp: '替玉お願いします', read: 'Kaedama onegaishimasu', tw: '請加麵（拉麵店）' },
        { jp: '辛いのは抜きで', read: 'Karai no wa nuki de', tw: '不要辣' }
    ];
    
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'phrases';
    section.innerHTML = `
        <h2 class="section-title"><span class="title-icon">🗣️</span>實用日語</h2>
        <p class="phrases-hint">👆 點擊 🔊 聆聽發音</p>
        <div class="phrases-list">
            ${phrases.map((p, i) => `
                <div class="phrase-card">
                    <div class="phrase-main">
                        <div class="phrase-text">
                            <div class="phrase-jp">${p.jp}</div>
                            <div class="phrase-read">${p.read}</div>
                            <div class="phrase-tw">${p.tw}</div>
                        </div>
                        <button class="speak-btn" onclick="speakJapanese('${p.jp.replace(/'/g, "\\'")}')">
                            🔊
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    emergencySection.after(section);
    
    const style = document.createElement('style');
    style.textContent = `
        .phrases-hint {
            font-size: 0.85rem;
            color: var(--text-muted);
            margin-bottom: 12px;
            text-align: center;
        }
        .phrases-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .phrase-card {
            background: var(--bg-card);
            border-radius: var(--radius);
            padding: 14px 16px;
            border: var(--border-width) solid var(--border);
            box-shadow: 4px 4px 0px var(--border);
        }
        .phrase-main {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .phrase-text {
            flex: 1;
        }
        .phrase-jp {
            font-size: 1.15rem;
            font-weight: 900;
            margin-bottom: 4px;
        }
        .phrase-read {
            font-size: 0.8rem;
            color: var(--secondary);
            margin-bottom: 4px;
            font-weight: 700;
        }
        .phrase-tw {
            font-size: 0.85rem;
            color: var(--text-secondary);
        }
        .speak-btn {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 3px solid var(--border);
            background: var(--accent);
            font-size: 1.5rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 3px 3px 0px var(--border);
            transition: all 0.15s;
        }
        .speak-btn:hover {
            transform: scale(1.1);
        }
        .speak-btn:active {
            transform: scale(0.95);
            box-shadow: 1px 1px 0px var(--border);
        }
        .speak-btn.speaking {
            background: var(--primary);
            animation: pulse 0.5s ease infinite;
        }
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
    `;
    document.head.appendChild(style);
}

// ===== 飯店附近推薦 =====
function addNearbySection() {
    const foodSection = document.getElementById('food');
    
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'nearby';
    section.innerHTML = `
        <h2 class="section-title"><span class="title-icon">📍</span>飯店附近推薦</h2>
        <div class="nearby-list">
            ${nearbyData.map(n => `
                <div class="nearby-card">
                    <div class="nearby-icon">${n.icon}</div>
                    <div class="nearby-info">
                        <div class="nearby-header">
                            <h4>${n.name}</h4>
                            <span class="nearby-tag">${n.tag}</span>
                        </div>
                        <p class="nearby-desc">${n.desc}</p>
                        <p class="nearby-note">💡 ${n.note}</p>
                        <p class="nearby-addr">📍 ${n.addr}</p>
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(n.map)}" 
                       target="_blank" class="map-link">
                        🗺️
                    </a>
                </div>
            `).join('')}
        </div>
    `;
    
    foodSection.after(section);
    
    const style = document.createElement('style');
    style.textContent = `
        .nearby-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        .nearby-card {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            background: var(--bg-card);
            border-radius: var(--radius);
            padding: 16px;
            border: var(--border-width) solid var(--border);
            box-shadow: 4px 4px 0px var(--border);
        }
        .nearby-icon { font-size: 2.2rem; flex-shrink: 0; }
        .nearby-info { flex: 1; min-width: 0; }
        .nearby-header { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; flex-wrap: wrap; }
        .nearby-header h4 { font-size: 1rem; font-weight: 900; }
        .nearby-tag {
            display: inline-block;
            background: var(--primary);
            color: white;
            font-size: 0.65rem;
            font-weight: 900;
            padding: 2px 8px;
            border-radius: 10px;
        }
        .nearby-desc { font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 4px; }
        .nearby-note { font-size: 0.75rem; color: var(--orange); font-weight: 700; margin-bottom: 4px; }
        .nearby-addr { font-size: 0.7rem; color: var(--text-muted); }
    `;
    document.head.appendChild(style);
}

// ===== 日語發音功能 =====
function speakJapanese(text) {
    // 檢查瀏覽器是否支援
    if (!('speechSynthesis' in window)) {
        alert('您的瀏覽器不支援語音功能');
        return;
    }
    
    // 停止正在播放的語音
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.8; // 稍微放慢速度
    utterance.pitch = 1;
    
    // 嘗試使用日語語音
    const voices = window.speechSynthesis.getVoices();
    const japaneseVoice = voices.find(v => v.lang.includes('ja'));
    if (japaneseVoice) {
        utterance.voice = japaneseVoice;
    }
    
    // 播放動畫
    const buttons = document.querySelectorAll('.speak-btn');
    buttons.forEach(btn => btn.classList.remove('speaking'));
    event.target.closest('.speak-btn').classList.add('speaking');
    
    utterance.onend = () => {
        event.target.closest('.speak-btn').classList.remove('speaking');
    };
    
    window.speechSynthesis.speak(utterance);
}

// 預載語音列表
if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
}


// ===== 伴手禮區塊 =====
function addSouvenirSection() {
    const foodSection = document.getElementById('food');
    
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'souvenir';
    section.innerHTML = `
        <h2 class="section-title"><span class="title-icon">🎁</span>必買伴手禮</h2>
        <div class="souvenir-scroll">
            ${souvenirData.map(s => `
                <div class="souvenir-card">
                    <div class="souvenir-icon">${s.icon}</div>
                    <h4>${s.name}</h4>
                    <p class="souvenir-desc">${s.desc}</p>
                    <p class="souvenir-where">📍 ${s.where}</p>
                </div>
            `).join('')}
        </div>
    `;
    
    foodSection.after(section);
    
    const style = document.createElement('style');
    style.textContent = `
        .souvenir-scroll {
            display: flex;
            gap: 14px;
            overflow-x: auto;
            padding-bottom: 12px;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
        }
        .souvenir-scroll::-webkit-scrollbar { display: none; }
        .souvenir-card {
            flex-shrink: 0;
            width: 150px;
            background: var(--bg-card);
            border-radius: var(--radius);
            padding: 18px 14px;
            text-align: center;
            border: var(--border-width) solid var(--border);
            box-shadow: 4px 4px 0px var(--border);
            transition: all 0.15s;
        }
        .souvenir-card:nth-child(odd) { transform: rotate(-1deg); }
        .souvenir-card:nth-child(even) { transform: rotate(1deg); }
        .souvenir-card:hover {
            transform: translateY(-4px) rotate(0deg);
        }
        .souvenir-icon { font-size: 2.5rem; margin-bottom: 8px; }
        .souvenir-card h4 { font-size: 0.95rem; font-weight: 900; margin-bottom: 6px; }
        .souvenir-desc { font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 6px; }
        .souvenir-where { font-size: 0.7rem; color: var(--orange); font-weight: 700; }
    `;
    document.head.appendChild(style);
}

// ===== 飯店附近購物 =====
function addShoppingSection() {
    const souvenirSection = document.getElementById('souvenir');
    
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'shopping';
    section.innerHTML = `
        <h2 class="section-title"><span class="title-icon">🛒</span>飯店附近購物</h2>
        <div class="shopping-list">
            ${shoppingData.map(s => `
                <div class="shopping-card">
                    <div class="shopping-icon">${s.icon}</div>
                    <div class="shopping-info">
                        <h4>${s.name}</h4>
                        <p class="shopping-desc">${s.desc}</p>
                        <p class="shopping-addr">📍 ${s.addr}</p>
                        <p class="shopping-hours">⏰ ${s.hours}</p>
                        <p class="shopping-distance">${s.distance}</p>
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.map)}" 
                       target="_blank" class="map-link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        導航
                    </a>
                </div>
            `).join('')}
        </div>
    `;
    
    souvenirSection.after(section);
    
    const style = document.createElement('style');
    style.textContent = `
        .shopping-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        .shopping-card {
            display: flex;
            align-items: center;
            gap: 14px;
            background: var(--bg-card);
            border-radius: var(--radius);
            padding: 16px;
            border: var(--border-width) solid var(--border);
            box-shadow: 4px 4px 0px var(--border);
        }
        .shopping-icon { font-size: 2.5rem; }
        .shopping-info { flex: 1; }
        .shopping-info h4 { font-size: 1rem; font-weight: 900; margin-bottom: 4px; }
        .shopping-desc { font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 4px; }
        .shopping-addr { font-size: 0.75rem; color: var(--text-muted); }
        .shopping-hours { font-size: 0.75rem; color: var(--secondary); font-weight: 700; }
        .shopping-distance { font-size: 0.8rem; color: var(--primary); font-weight: 900; }
    `;
    document.head.appendChild(style);
}

// ===== 藥妝店區塊 =====
function addDrugstoreSection() {
    const shoppingSection = document.getElementById('shopping');
    
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'drugstore';
    section.innerHTML = `
        <h2 class="section-title"><span class="title-icon">💊</span>藥妝店優惠排行</h2>
        <p class="drugstore-tip">💡 買滿 ¥5,000 可辦理免稅（省10%）</p>
        <div class="drugstore-list">
            ${drugstoreData.map(d => `
                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.map)}" 
                   target="_blank" class="drugstore-card">
                    <div class="drugstore-icon">${d.icon}</div>
                    <div class="drugstore-info">
                        <div class="drugstore-header">
                            <h4>${d.name}</h4>
                            <span class="drugstore-tag">${d.tag}</span>
                        </div>
                        <p class="drugstore-desc">${d.desc}</p>
                        <p class="drugstore-detail">📍 ${d.addr} ⏰ ${d.hours}</p>
                    </div>
                    <span class="drugstore-arrow">→</span>
                </a>
            `).join('')}
        </div>
    `;
    
    shoppingSection.after(section);
    
    const style = document.createElement('style');
    style.textContent = `
        .drugstore-tip {
            font-size: 0.85rem;
            color: var(--orange);
            font-weight: 700;
            margin-bottom: 12px;
            text-align: center;
        }
        .drugstore-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .drugstore-card {
            display: flex;
            align-items: center;
            gap: 12px;
            background: var(--bg-card);
            border-radius: var(--radius);
            padding: 14px 16px;
            border: var(--border-width) solid var(--border);
            box-shadow: 4px 4px 0px var(--border);
            text-decoration: none;
            color: var(--text-primary);
            transition: all 0.15s;
        }
        .drugstore-card:hover {
            transform: translateX(4px);
            background: var(--bg-elevated);
        }
        .drugstore-icon { font-size: 2rem; }
        .drugstore-info { flex: 1; min-width: 0; }
        .drugstore-header { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; flex-wrap: wrap; }
        .drugstore-header h4 { font-size: 0.9rem; font-weight: 900; }
        .drugstore-tag {
            display: inline-block;
            background: var(--primary);
            color: white;
            font-size: 0.6rem;
            font-weight: 900;
            padding: 2px 6px;
            border-radius: 8px;
        }
        .drugstore-desc { font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 2px; }
        .drugstore-detail { font-size: 0.7rem; color: var(--text-muted); }
        .drugstore-arrow { font-size: 1.2rem; color: var(--secondary); font-weight: 900; }
    `;
    document.head.appendChild(style);
}

// ===== 100円商店區塊 =====
function add100YenSection() {
    const drugstoreSection = document.getElementById('drugstore');
    
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'hundredyen';
    section.innerHTML = `
        <h2 class="section-title"><span class="title-icon">💯</span>100円商店</h2>
        <div class="hundredyen-list">
            ${hundredYenData.map(s => `
                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.map)}" 
                   target="_blank" class="hundredyen-card">
                    <div class="hundredyen-icon">${s.icon}</div>
                    <div class="hundredyen-info">
                        <div class="hundredyen-header">
                            <span class="hundredyen-brand">${s.brand}</span>
                            <h4>${s.name}</h4>
                            ${s.tag ? `<span class="hundredyen-tag">${s.tag}</span>` : ''}
                        </div>
                        <p class="hundredyen-detail">📍 ${s.addr} ⏰ ${s.hours}</p>
                    </div>
                    <span class="hundredyen-arrow">→</span>
                </a>
            `).join('')}
        </div>
    `;
    
    drugstoreSection.after(section);
    
    const style = document.createElement('style');
    style.textContent = `
        .hundredyen-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .hundredyen-card {
            display: flex;
            align-items: center;
            gap: 12px;
            background: var(--bg-card);
            border-radius: var(--radius);
            padding: 14px 16px;
            border: var(--border-width) solid var(--border);
            box-shadow: 4px 4px 0px var(--border);
            text-decoration: none;
            color: var(--text-primary);
            transition: all 0.15s;
        }
        .hundredyen-card:hover {
            transform: translateX(4px);
            background: var(--bg-elevated);
        }
        .hundredyen-icon { font-size: 1.5rem; }
        .hundredyen-info { flex: 1; min-width: 0; }
        .hundredyen-header { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; flex-wrap: wrap; }
        .hundredyen-brand { font-size: 0.75rem; font-weight: 900; color: var(--primary); }
        .hundredyen-header h4 { font-size: 0.85rem; font-weight: 700; }
        .hundredyen-tag {
            display: inline-block;
            background: var(--orange);
            color: white;
            font-size: 0.6rem;
            font-weight: 900;
            padding: 2px 6px;
            border-radius: 8px;
        }
        .hundredyen-detail { font-size: 0.7rem; color: var(--text-muted); }
        .hundredyen-arrow { font-size: 1.2rem; color: var(--secondary); font-weight: 900; }
    `;
    document.head.appendChild(style);
}


function addDessertSection() {
    const hundredyenSection = document.getElementById('hundredyen');
    
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'dessert';
    section.innerHTML = `
        <h2 class="section-title"><span class="title-icon">🍰</span>必吃甜點</h2>
        <div class="dessert-scroll">
            ${dessertData.map(d => `
                <div class="dessert-card">
                    <div class="dessert-icon">${d.icon}</div>
                    <h4>${d.name}</h4>
                    <p class="dessert-desc">${d.desc}</p>
                    <span class="dessert-tag">${d.tag}</span>
                    <p class="dessert-addr">📍 ${d.addr}</p>
                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.map)}" 
                       target="_blank" class="dessert-map-btn">
                        🗺️ 導航
                    </a>
                </div>
            `).join('')}
        </div>
    `;
    
    hundredyenSection.after(section);
    
    const style = document.createElement('style');
    style.textContent = `
        .dessert-scroll {
            display: flex;
            gap: 14px;
            overflow-x: auto;
            padding-bottom: 12px;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
        }
        .dessert-scroll::-webkit-scrollbar { display: none; }
        .dessert-card {
            flex-shrink: 0;
            width: 160px;
            background: var(--bg-card);
            border-radius: var(--radius);
            padding: 16px 14px;
            text-align: center;
            border: var(--border-width) solid var(--border);
            box-shadow: 4px 4px 0px var(--border);
            transition: all 0.15s;
        }
        .dessert-card:nth-child(odd) { transform: rotate(-1deg); }
        .dessert-card:nth-child(even) { transform: rotate(1deg); }
        .dessert-card:hover {
            transform: translateY(-4px) rotate(0deg);
        }
        .dessert-icon { font-size: 2.5rem; margin-bottom: 8px; }
        .dessert-card h4 { font-size: 0.9rem; font-weight: 900; margin-bottom: 6px; }
        .dessert-desc { font-size: 0.7rem; color: var(--text-secondary); margin-bottom: 6px; line-height: 1.4; }
        .dessert-tag {
            display: inline-block;
            background: var(--pink);
            color: white;
            font-size: 0.65rem;
            font-weight: 900;
            padding: 3px 8px;
            border-radius: 10px;
            margin-bottom: 6px;
        }
        .dessert-addr { font-size: 0.7rem; color: var(--text-muted); margin-bottom: 8px; }
        .dessert-map-btn {
            display: inline-block;
            background: var(--secondary);
            color: white;
            font-size: 0.75rem;
            font-weight: 900;
            padding: 6px 12px;
            border-radius: 15px;
            text-decoration: none;
            border: 2px solid var(--border);
            transition: all 0.15s;
        }
        .dessert-map-btn:hover {
            background: var(--primary);
            transform: scale(1.05);
        }
    `;
    document.head.appendChild(style);
}

// ===== 地鐵交通區塊 =====
function addMetroSection() {
    const dessertSection = document.getElementById('dessert');
    
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'metro';
    section.innerHTML = `
        <h2 class="section-title"><span class="title-icon">🚇</span>地鐵交通</h2>
        
        <h3 class="metro-subtitle">📍 飯店最近車站</h3>
        <div class="metro-stations">
            ${metroData.stations.map(s => `
                <div class="station-card">
                    <div class="station-line">${s.line}</div>
                    <div class="station-info">
                        <h4>${s.name}</h4>
                        <p>${s.exit} • ${s.distance}</p>
                    </div>
                    <span class="station-note">${s.note}</span>
                </div>
            `).join('')}
        </div>
        
        <h3 class="metro-subtitle">🗺️ 行程常用路線</h3>
        <div class="metro-routes">
            ${metroData.routes.map(r => `
                <div class="route-row">
                    <span class="route-line">${r.line}</span>
                    <span class="route-dest">${r.dest}</span>
                    <span class="route-time">${r.time}</span>
                    <span class="route-fare">${r.fare}</span>
                </div>
            `).join('')}
        </div>
        
        <h3 class="metro-subtitle">🎫 票價優惠</h3>
        <div class="ticket-list">
            ${metroData.tickets.map(t => `
                <div class="ticket-card">
                    <span class="ticket-name">${t.name}</span>
                    <span class="ticket-price">${t.price}</span>
                    <span class="ticket-note">${t.note}</span>
                </div>
            `).join('')}
        </div>
        
        <h3 class="metro-subtitle">🎟️ 推薦周遊券</h3>
        <div class="pass-list">
            ${passData.map(p => `
                <div class="pass-card ${p.recommended ? 'recommended' : ''}">
                    <div class="pass-icon">${p.icon}</div>
                    <div class="pass-info">
                        <h4>${p.name} ${p.recommended ? '<span class="pass-badge">推薦</span>' : ''}</h4>
                        <p class="pass-price">${p.price}</p>
                        <p class="pass-includes">${p.includes}</p>
                        <p class="pass-use">📅 ${p.useDay}</p>
                        <p class="pass-save">💰 ${p.save}</p>
                    </div>
                </div>
            `).join('')}
        </div>
        
        <a href="https://www.google.com/maps/search/?api=1&query=福岡市地下鉄+天神駅" 
           target="_blank" class="metro-map-btn">🗺️ 開啟天神站地圖</a>
    `;
    
    dessertSection.after(section);
    
    const style = document.createElement('style');
    style.textContent = `
        .metro-subtitle {
            font-size: 0.95rem;
            font-weight: 900;
            margin: 16px 0 10px;
            color: var(--text-primary);
        }
        .metro-stations {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        .station-card {
            display: flex;
            align-items: center;
            gap: 12px;
            background: var(--bg-card);
            border-radius: var(--radius-sm);
            padding: 12px 14px;
            border: var(--border-width) solid var(--border);
        }
        .station-line { font-size: 0.8rem; font-weight: 900; white-space: nowrap; }
        .station-info { flex: 1; }
        .station-info h4 { font-size: 0.9rem; font-weight: 900; }
        .station-info p { font-size: 0.75rem; color: var(--text-secondary); }
        .station-note { font-size: 0.7rem; color: var(--primary); font-weight: 900; }
        
        .metro-routes {
            background: var(--bg-card);
            border-radius: var(--radius);
            border: var(--border-width) solid var(--border);
            overflow: hidden;
        }
        .route-row {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 14px;
            border-bottom: 1px solid var(--border);
        }
        .route-row:last-child { border-bottom: none; }
        .route-line { font-size: 1rem; }
        .route-dest { flex: 1; font-size: 0.85rem; font-weight: 700; }
        .route-time { font-size: 0.8rem; color: var(--secondary); font-weight: 900; }
        .route-fare { font-size: 0.75rem; color: var(--text-muted); }
        
        .ticket-list {
            display: flex;
            gap: 10px;
            overflow-x: auto;
            padding-bottom: 8px;
        }
        .ticket-card {
            flex: 0 0 auto;
            min-width: 120px;
            background: linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%);
            color: white;
            border-radius: var(--radius);
            padding: 12px;
            text-align: center;
            border: var(--border-width) solid var(--border);
        }
        .ticket-name { display: block; font-size: 0.8rem; font-weight: 900; margin-bottom: 4px; }
        .ticket-price { display: block; font-size: 1.1rem; font-weight: 900; margin-bottom: 2px; }
        .ticket-note { display: block; font-size: 0.65rem; opacity: 0.9; }
        
        .pass-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .pass-card {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            background: var(--bg-card);
            border-radius: var(--radius);
            padding: 14px;
            border: var(--border-width) solid var(--border);
        }
        .pass-card.recommended {
            background: linear-gradient(135deg, rgba(255,113,206,0.1) 0%, rgba(1,205,254,0.1) 100%);
            border-color: var(--primary);
        }
        .pass-icon { font-size: 2rem; }
        .pass-info { flex: 1; }
        .pass-info h4 { font-size: 0.9rem; font-weight: 900; margin-bottom: 4px; display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
        .pass-badge {
            display: inline-block;
            background: var(--orange);
            color: white;
            font-size: 0.6rem;
            padding: 2px 6px;
            border-radius: 8px;
        }
        .pass-price { font-size: 1rem; font-weight: 900; color: var(--primary); margin-bottom: 4px; }
        .pass-includes { font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 4px; }
        .pass-use { font-size: 0.7rem; color: var(--secondary); font-weight: 700; margin-bottom: 2px; }
        .pass-save { font-size: 0.7rem; color: var(--orange); font-weight: 700; }
        
        .metro-map-btn {
            display: block;
            text-align: center;
            background: var(--orange);
            color: white;
            font-weight: 900;
            padding: 12px;
            border-radius: var(--radius);
            text-decoration: none;
            margin-top: 16px;
            border: var(--border-width) solid var(--border);
            box-shadow: 3px 3px 0 var(--border);
        }
    `;
    document.head.appendChild(style);
}


let members = JSON.parse(localStorage.getItem('fukuoka-members') || '["我"]');

function addSplitBillSection() {
    const expenseSection = document.getElementById('expense');
    
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'splitbill';
    section.innerHTML = `
        <h2 class="section-title"><span class="title-icon">👥</span>旅伴分帳</h2>
        <div class="members-bar">
            <div class="members-list" id="membersList"></div>
            <button class="btn btn-accent add-member-btn" onclick="addMember()">+ 新增旅伴</button>
        </div>
        <div class="split-summary" id="splitSummary"></div>
        <div class="split-detail" id="splitDetail"></div>
    `;
    
    expenseSection.after(section);
    renderMembers();
    renderSplitSummary();
    
    const style = document.createElement('style');
    style.textContent = `
        .members-bar {
            display: flex;
            gap: 12px;
            align-items: center;
            margin-bottom: 16px;
            flex-wrap: wrap;
        }
        .members-list {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            flex: 1;
        }
        .member-tag {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 14px;
            background: var(--purple);
            color: white;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 900;
            border: 2px solid var(--border);
        }
        .member-tag .remove {
            background: none;
            border: none;
            color: rgba(255,255,255,0.7);
            cursor: pointer;
            font-size: 1rem;
            padding: 0;
            margin-left: 4px;
        }
        .member-tag .remove:hover { color: white; }
        .add-member-btn {
            flex-shrink: 0;
            padding: 8px 16px !important;
            font-size: 0.85rem !important;
        }
        .split-summary {
            background: var(--bg-card);
            border-radius: var(--radius);
            padding: 20px;
            border: var(--border-width) solid var(--border);
            box-shadow: var(--shadow);
            margin-bottom: 16px;
            text-align: center;
        }
        .split-total {
            font-size: 0.9rem;
            color: var(--text-secondary);
            margin-bottom: 8px;
        }
        .split-per-person {
            font-size: 2rem;
            font-weight: 900;
            color: var(--primary);
        }
        .split-per-twd {
            font-size: 1rem;
            color: var(--text-muted);
        }
        .split-detail {
            display: grid;
            gap: 8px;
        }
        .split-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 16px;
            background: var(--bg-card);
            border-radius: var(--radius-sm);
            border: 2px solid var(--border);
        }
        .split-row .name {
            font-weight: 900;
        }
        .split-row .amount {
            font-weight: 900;
            color: var(--secondary);
        }
    `;
    document.head.appendChild(style);
}

// ===== 夜生活區塊 =====
function addNightlifeSection() {
    const splitBillSection = document.getElementById('splitbill');
    
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'nightlife';
    section.innerHTML = `
        <h2 class="section-title"><span class="title-icon">🌙</span>夜生活推薦</h2>
        
        <h3 class="nightlife-subtitle">🍺 居酒屋推薦</h3>
        <div class="nightlife-list">
            ${nightlifeData.izakaya.map(i => `
                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(i.map)}" 
                   target="_blank" class="nightlife-card">
                    <div class="nightlife-icon">${i.icon}</div>
                    <div class="nightlife-info">
                        <div class="nightlife-header">
                            <h4>${i.name}</h4>
                            <span class="nightlife-tag">${i.tag}</span>
                        </div>
                        <p class="nightlife-desc">${i.desc}</p>
                        <p class="nightlife-loc">📍 ${i.loc}</p>
                    </div>
                    <span class="nightlife-arrow">→</span>
                </a>
            `).join('')}
        </div>
        
        <h3 class="nightlife-subtitle">🍸 酒吧推薦</h3>
        <div class="nightlife-list">
            ${nightlifeData.bars.map(b => `
                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.map)}" 
                   target="_blank" class="nightlife-card bar">
                    <div class="nightlife-icon">${b.icon}</div>
                    <div class="nightlife-info">
                        <div class="nightlife-header">
                            <h4>${b.name}</h4>
                            <span class="nightlife-tag bar">${b.tag}</span>
                        </div>
                        <p class="nightlife-desc">${b.desc}</p>
                        <p class="nightlife-loc">📍 ${b.loc}</p>
                    </div>
                    <span class="nightlife-arrow">→</span>
                </a>
            `).join('')}
        </div>
        
        <div class="nightlife-note">
            <p>💡 <strong>親子提醒</strong>：屋台街適合帶小孩，居酒屋建議18:00前入場</p>
        </div>
    `;
    
    splitBillSection.after(section);
    
    const style = document.createElement('style');
    style.textContent = `
        .nightlife-subtitle {
            font-size: 0.95rem;
            font-weight: 900;
            margin: 16px 0 10px;
            color: var(--text-primary);
        }
        .nightlife-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .nightlife-card {
            display: flex;
            align-items: center;
            gap: 12px;
            background: var(--bg-card);
            border-radius: var(--radius);
            padding: 14px 16px;
            border: var(--border-width) solid var(--border);
            box-shadow: 4px 4px 0px var(--border);
            text-decoration: none;
            color: var(--text-primary);
            transition: all 0.15s;
        }
        .nightlife-card:hover {
            transform: translateX(4px);
            background: var(--bg-elevated);
        }
        .nightlife-card.bar {
            background: linear-gradient(135deg, rgba(166,108,255,0.08) 0%, rgba(255,113,206,0.08) 100%);
        }
        .nightlife-icon { font-size: 1.8rem; }
        .nightlife-info { flex: 1; min-width: 0; }
        .nightlife-header { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; flex-wrap: wrap; }
        .nightlife-header h4 { font-size: 0.9rem; font-weight: 900; }
        .nightlife-tag {
            display: inline-block;
            background: var(--primary);
            color: white;
            font-size: 0.6rem;
            font-weight: 900;
            padding: 2px 6px;
            border-radius: 8px;
        }
        .nightlife-tag.bar { background: var(--purple); }
        .nightlife-desc { font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 2px; }
        .nightlife-loc { font-size: 0.7rem; color: var(--text-muted); }
        .nightlife-arrow { font-size: 1.2rem; color: var(--secondary); font-weight: 900; }
        .nightlife-note {
            margin-top: 16px;
            padding: 12px 16px;
            background: rgba(255, 159, 67, 0.15);
            border-radius: var(--radius-sm);
            border: 2px solid var(--orange);
        }
        .nightlife-note p { font-size: 0.8rem; color: var(--text-secondary); }
        .nightlife-note strong { color: var(--orange); }
    `;
    document.head.appendChild(style);
}

// ===== 親子友善廁所區塊 =====
function addBabyRoomSection() {
    const nightlifeSection = document.getElementById('nightlife');
    
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'babyroom';
    
    const renderRoom = (room) => `
        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(room.map)}" 
           target="_blank" class="babyroom-card ${room.recommended ? 'recommended' : ''}">
            <div class="babyroom-main">
                <div class="babyroom-header">
                    <h4>${room.name} ${room.recommended ? '<span class="babyroom-badge">⭐推薦</span>' : ''}</h4>
                    <span class="babyroom-floor">${room.floor}</span>
                </div>
                <div class="babyroom-stats">
                    <span>🚼 尿布台×${room.diaper}</span>
                    <span>🤱 授乳室×${room.nursing}</span>
                </div>
                <div class="babyroom-extras">
                    ${room.extras.map(e => `<span class="extra-tag">${e}</span>`).join('')}
                </div>
            </div>
            <span class="babyroom-arrow">→</span>
        </a>
    `;
    
    section.innerHTML = `
        <h2 class="section-title"><span class="title-icon">👶</span>親子友善廁所</h2>
        
        <h3 class="babyroom-subtitle">📍 天神區（飯店附近）</h3>
        <div class="babyroom-list">
            ${babyRoomData.tenjin.map(renderRoom).join('')}
        </div>
        
        <h3 class="babyroom-subtitle">📍 博多區</h3>
        <div class="babyroom-list">
            ${babyRoomData.hakata.map(renderRoom).join('')}
        </div>
        
        <div class="babyroom-tip">
            <p>💡 <strong>推薦</strong>：博多阪急7F 設備最齊全（尿布台×9・授乳室×4）</p>
        </div>
    `;
    
    nightlifeSection.after(section);
    
    const style = document.createElement('style');
    style.textContent = `
        .babyroom-subtitle {
            font-size: 0.95rem;
            font-weight: 900;
            margin: 16px 0 10px;
            color: var(--text-primary);
        }
        .babyroom-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .babyroom-card {
            display: flex;
            align-items: center;
            gap: 12px;
            background: var(--bg-card);
            border-radius: var(--radius);
            padding: 14px 16px;
            border: var(--border-width) solid var(--border);
            box-shadow: 4px 4px 0px var(--border);
            text-decoration: none;
            color: var(--text-primary);
            transition: all 0.15s;
        }
        .babyroom-card:hover {
            transform: translateX(4px);
            background: var(--bg-elevated);
        }
        .babyroom-card.recommended {
            background: linear-gradient(135deg, rgba(255,113,206,0.1) 0%, rgba(78,205,196,0.1) 100%);
            border-color: var(--pink);
        }
        .babyroom-main { flex: 1; }
        .babyroom-header { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; flex-wrap: wrap; }
        .babyroom-header h4 { font-size: 0.9rem; font-weight: 900; display: flex; align-items: center; gap: 6px; }
        .babyroom-floor { font-size: 0.75rem; color: var(--secondary); font-weight: 900; }
        .babyroom-badge {
            display: inline-block;
            background: var(--pink);
            color: white;
            font-size: 0.6rem;
            padding: 2px 6px;
            border-radius: 8px;
        }
        .babyroom-stats {
            display: flex;
            gap: 12px;
            font-size: 0.8rem;
            font-weight: 700;
            color: var(--text-secondary);
            margin-bottom: 6px;
        }
        .babyroom-extras { display: flex; gap: 6px; flex-wrap: wrap; }
        .extra-tag {
            font-size: 0.65rem;
            background: var(--bg-elevated);
            padding: 2px 8px;
            border-radius: 10px;
            color: var(--text-muted);
        }
        .babyroom-arrow { font-size: 1.2rem; color: var(--secondary); font-weight: 900; }
        .babyroom-tip {
            margin-top: 16px;
            padding: 12px 16px;
            background: rgba(255, 113, 206, 0.12);
            border-radius: var(--radius-sm);
            border: 2px solid var(--pink);
        }
        .babyroom-tip p { font-size: 0.8rem; color: var(--text-secondary); }
        .babyroom-tip strong { color: var(--pink); }
    `;
    document.head.appendChild(style);
}

function renderMembers() {
    const container = document.getElementById('membersList');
    container.innerHTML = members.map((m, i) => `
        <span class="member-tag">
            ${m}
            ${i > 0 ? `<button class="remove" onclick="removeMember(${i})">×</button>` : ''}
        </span>
    `).join('');
}

function addMember() {
    const name = prompt('請輸入旅伴名稱：');
    if (name && name.trim()) {
        members.push(name.trim());
        localStorage.setItem('fukuoka-members', JSON.stringify(members));
        renderMembers();
        renderSplitSummary();
    }
}

function removeMember(index) {
    if (confirm(`確定移除 ${members[index]}？`)) {
        members.splice(index, 1);
        localStorage.setItem('fukuoka-members', JSON.stringify(members));
        renderMembers();
        renderSplitSummary();
    }
}

function renderSplitSummary() {
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);
    const perPerson = members.length > 0 ? Math.ceil(total / members.length) : 0;
    
    const summary = document.getElementById('splitSummary');
    const detail = document.getElementById('splitDetail');
    
    summary.innerHTML = `
        <div class="split-total">總支出 ¥${total.toLocaleString()} ÷ ${members.length} 人</div>
        <div class="split-per-person">¥${perPerson.toLocaleString()}</div>
        <div class="split-per-twd">≈ NT$${Math.round(perPerson * JPY_TO_TWD).toLocaleString()} / 人</div>
    `;
    
    detail.innerHTML = members.map(m => `
        <div class="split-row">
            <span class="name">👤 ${m}</span>
            <span class="amount">¥${perPerson.toLocaleString()}</span>
        </div>
    `).join('');
}

// 更新記帳時同步更新分帳
const originalRenderExpenses = renderExpenses;
renderExpenses = function() {
    originalRenderExpenses();
    if (document.getElementById('splitSummary')) {
        renderSplitSummary();
    }
};
