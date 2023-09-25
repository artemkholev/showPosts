import { Book, Review, User } from "./types"

export const users: User[] = [
  { id: "e4644f87-94df-40ff-80e5-15831d28873a", name: "Юлия" },
  { id: "db05b87a-e575-4560-9b09-301951de72dd", name: "Татьяна" },
  { id: "6ae26070-4a3c-4867-a8d0-36b437eb40e2", name: "Сергей" },
  { id: "8cbef307-fd45-49ce-a275-b7b98390f726", name: "Светлана" },
  { id: "4f7bb96a-126f-49d3-810d-3a749073ac36", name: "Павел" },
  { id: "bb4d6cee-5490-48f0-9619-f5c70a0db2c8", name: "Наталья" },
  { id: "4882de55-e42d-4f3c-96a7-2a36145b1033", name: "Михаил" },
  { id: "4d9a7fd2-a76a-4378-998a-36f60a53a9d4", name: "Константин" },
  { id: "de1e9d13-3bbd-4716-896b-134b6434822f", name: "Галина" },
  { id: "8c9000cb-17ec-43d1-9179-d68cffbc100a", name: "Ирина" },
  { id: "b5471ceb-86a4-47e0-859d-7c3f4289d573", name: "Джордж Оруэлл" },
  { id: "f03e4e2f-e918-4602-a838-9774b324c7c3", name: "Уильям Голдинг" },
  { id: "23aadfe1-4a96-4da4-9444-6cb1edbdfac1", name: "Дж. Д. Сэлинджер" },
  { id: "2896b7e5-0a08-4c06-aaed-1bbbc99f393b", name: "Льв Толстой" },
  { id: "2d578ec0-3cee-4953-ae52-197d1b1451a8", name: "Джейн Остен" },
  { id: "1d302a01-4634-4590-addd-93f670114240", name: "Харпер Ли" },
  { id: "f3f55fa8-0e55-428e-8e13-15de0184795c", name: "Джон Стейнбек" },
  { id: "9b0dcaa7-eac4-4dea-b94d-bafb7824580a", name: "Джек Керуак" },
  { id: "c0ca926e-3005-49a1-a572-37df489a3ac4", name: "Ф. Скотт Фицджеральд" },
  { id: "cda32ce5-eb00-46b0-9f53-41aebaf3e62a", name: "Федор Достоевский" }
];

export const books: Book[] = [
  {
    id: 1,
    authorId: "b5471ceb-86a4-47e0-859d-7c3f4289d573",
    reviewIds: [],
    name: "1984",
    description:
      "мрачный роман-предупреждение об авторитарном правительстве, контролирующем каждый аспект общественной и частной жизни."
  },
  {
    id: 2,
    authorId: "f03e4e2f-e918-4602-a838-9774b324c7c3",
    reviewIds: [],
    name: "Повелитель мух",
    description:
      "аллегорический роман о группе мальчиков, оказавшихся на необитаемом острове, который служит метафорой для темной стороны человеческой природы."
  },
  {
    id: 3,
    authorId: "23aadfe1-4a96-4da4-9444-6cb1edbdfac1",
    reviewIds: [],
    name: "Над пропастью во ржи",
    description:
      "история подростка Холдена Колфилда, отвергающего лицемерие и притворство взрослого мира, предпочитая честность и непосредственность."
  },
  {
    id: 4,
    authorId: "2896b7e5-0a08-4c06-aaed-1bbbc99f393b",
    reviewIds: [],
    name: "Война и мир",
    description:
      "эпическая история о жизни русского дворянства на фоне наполеоновских войн, исследующая темы любви, войны, смерти и смысла жизни."
  },
  {
    id: 5,
    authorId: "2d578ec0-3cee-4953-ae52-197d1b1451a8",
    reviewIds: ["3a444249-dd96-48cb-8433-361ea7d48fab"],
    name: "Гордость и предубеждение",
    description:
      "комедийный роман о жизни английского провинциального дворянства начала 19 века, рассказывающий историю Элизабет Беннет и ее борьбы за любовь и независимость."
  },
  {
    id: 6,
    authorId: "1d302a01-4634-4590-addd-93f670114240",
    reviewIds: ["2a447206-211c-4cb7-beab-f7b0bec27ee0"],
    name: "Убить пересмешника",
    description:
      "классический роман о расовой сегрегации и борьбе за справедливость в американском южном городке, глазами восьмилетней девочки."
  },
  {
    id: 7,
    authorId: "f3f55fa8-0e55-428e-8e13-15de0184795c",
    reviewIds: ["d33c7549-4e34-4c17-82ef-153c1073d9d1"],
    name: "Гроздья гнева",
    description:
      "эпический роман о Великой депрессии, рассказывающий о семье Джоудов, вынужденных покинуть свою ферму и отправиться в Калифорнию в поисках лучшей жизни."
  },
  {
    id: 8,
    authorId: "9b0dcaa7-eac4-4dea-b94d-bafb7824580a",
    reviewIds: [],
    name: "На дороге",
    description:
      "автобиографический роман, описывающий жизнь поколения битников, их поиски себя и своего места в мире."
  },
  {
    id: 9,
    authorId: "c0ca926e-3005-49a1-a572-37df489a3ac4",
    reviewIds: [],
    name: "Великий Гэтсби",
    description:
      "роман о разочаровании, предательстве и американской мечте, рассказывающий историю Джея Гэтсби, его стремления вернуть свою утраченную любовь и его трагический конец."
  },
  {
    id: 10,
    authorId: "cda32ce5-eb00-46b0-9f53-41aebaf3e62a",
    reviewIds: [],
    name: "Идиот",
    description:
      "психологический роман о князе Мышкине, который приезжает в Россию после нескольких лет пребывания в Швейцарии, и его столкновении с жестокостью и порочностью русской жизни."
  },
  {
    id: 11,
    authorId: "cda32ce5-eb00-46b0-9f53-41aсссf3e62a",
    reviewIds: [],
    name: "",
    description: "безымяная книга без автора"
  }
];

export const reviews: Review[] = [
  {
    userId: "e4644f87-94df-40ff-80e5-15831d28873a",
    id: "3a444249-dd96-48cb-8433-361ea7d48fab",
    text: "интересная история о любви и социальном неравенстве"
  },
  {
    userId: "8cbef307-fd45-49ce-a275-b7b98390f726",
    id: "2a447206-211c-4cb7-beab-f7b0bec27ee0",
    text: "сильный роман о расизме и борьбе за справедливость"
  },
  {
    userId: "bb4d6cee-5490-48f0-9619-f5c70a0db2c8",
    id: "d33c7549-4e34-4c17-82ef-153c1073d9d1",
    text:
      "эпическая история об американской семье во времена Великой депрессии."
  }
];