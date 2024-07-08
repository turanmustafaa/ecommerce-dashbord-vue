# Eva Frontend Case

This project is a case study developed for a job application. This README file contains the general structure of the project, technologies used, and steps to run the project.

## Technologies Used

The following technologies were used in this project:

- VueJs Composition API
- Vuex
- Vue-router
- Axios
- TailwindCSS
- Vue Toastify
- Apex Charts

# How I Developed the Project

In this project, I used all the requested technologies, visual structures, and added functionality. I developed the project using VueJs and Vuex. Below are detailed information about the methods and technologies I used during the development process:

- The project starts with a login page.
- The project has a router middleware structure, so no page can be accessed without logging in.
- There is a JWT token authentication process in the project.
- All requests are sent with a token.
- The project consists of 2 pages: login and graph screen.
- In accordance with the documentation, the user can see 60, 30, 15, and 7-day data.
- By clicking on this data (columns), users can see the sales figures of the products.
- I developed the project to be re-scalable. The store structure is fragmented and organized, and similarly, all other pages and components are divided into necessary parts, thus prioritizing reusability.
- I used "vuex" for data exchange operations.
- Service requests are sent from the api folder with a "base_url". I included an interceptor here.
- I used the "Axios" library for requests.
- I did all Style Operations with "TailwindCSS".
- I used Toast notification in the project, thus providing a better user experience.
- I deployed the project with Vercel. You can access the link below.
- For more details, you can examine the project.
- https://eva-vue3-case.vercel.app/

## How to Run?

Follow these steps to run the project on your local machine:

1. First, clone the project or download it as a zip:
2. To use the project more effectively on your local machine, it would be beneficial to use version 16 of Node.js for some dependencies.
3. Then follow the steps below.

```bash
git clone <project-git-url>

npm install

npm run dev
```



# Eva Frontend Case

Bu proje, iş başvurusu için geliştirilen bir case projesidir. Bu README dosyası, projenin genel yapısını, kullanılan teknolojiler ve projeyi çalıştırma adımlarını içerir.

## Kullanılan Teknolojiler

Bu projede aşağıdaki teknolojiler kullanılmıştır:

- VueJs Composition api
- Vuex
- Vue-router
- Axios
- TailwindCSS
- Vue Toastify
- Apex Charts

# Projeyi Nasıl Geliştirdim

Bu projede istenilen tum teknolojileri, gorsel yapıları kullandım ve fonksiyonellik kattım. projeyi Vuejs ve Vuex kullanılarak geliştirdim. Aşağıda projenin geliştirilme sürecinde kullandıgım yöntemler ve teknolojiler hakkında detaylı bilgiler bulunmaktadır:

- poje login sayfası ile baslıyor.
- projede router middleware yapısı var bundan kaynaklı olarak login olmadan herhangi bir sayfaya ulaşılamaz.
- projede jwt token ile otantikasyon işlemi vardır.
- tum istekler token ile atılıyor.
- Proje 2 sayfadan olusmakta login ve grafik ekranı.
- dokumantasyona uygun olarak kullanıcı 60,30,15 ve 7 gunluk verileri gorebilir.
- bu veriler(kolanlar) uzerine tıklayarak urunlerin satıs rakamlarını gorebilir.
- Projeyi tekrar olçeklenebilir halde geliştirdim. store yapısı parçalı ve duzenli bir halde aynı şekilde diger tum sayfalar ve componentler gerekli olcude parcalara bolunmus vaziyette boylelikle tekrar kullanabilirlik on planda.
- Veri alışverişi işlemleri için "vuex kullandım.
- Servis istekleri bir "base_url" ile api klasorunden atılıyor. buraya bir interceptor dahil ettim.
- İstekler için "Axios" kütüphanesi kullandım.
- Tum Style Islemleri "TailwindCSS" ile yaptım. 
- projede Toast notification kullandım boylelikle daha iyi bir kullanıcı deneyimi sundum.
- projeyi vercel ile deploy ettim. aşağıda linkine ulaşabilirsiniz.
- daha cok detay için projeyi inceleyebilirsiniz.
- https://eva-vue3-case.vercel.app/


## Nasıl Çalıştırılır?

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1. Öncelikle, projeyi klonlayın veya zip olarak indirin:
2. Projeyi Localinizdedaha Saglıklı kullanmak için nodejs'in 16. surumunu kullanmanız faydalı olacaktır bazı dependency'ler için.
3. sonrasında aşağıdaki adımları takip edin.

```bash
git clone <proje-git-url>

npm install

npm run dev
```
