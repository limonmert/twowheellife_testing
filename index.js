function translateToTurkish(){
    document.getElementsByClassName("head1")[0].textContent="TwoWheelLife'a Hoşgeldiniz!";

    document.getElementsByClassName("head2")[0].textContent="Motorlara aşina değilsen endişelenme; seni yönlendirmek için buradayız!";


    document.getElementsByClassName("p1")[0].textContent="Bütçenize ve tercihinize uygun mükemmel motosikleti mi arıyorsunuz? Doğru yerdesiniz! TwoWheelLife'ta, doğru motosikleti seçmenin bazen zorlayıcı olabileceğini anlıyoruz. İster deneyimli bir sürücü olun, ister yeni başlayan; kapsamlı kılavuzlarımız ve uzman ipuçlarımızla motosikletler dünyasında rahatça ilerlemenize yardımcı olacağız. Sportif modellerden kruvazörlere, her zevke ve bütçeye uygun seçeneklerimiz var.";
    
    document.getElementsByClassName("p2")[0].textContent="Birlikte, en iyi seçenekleri bulmanıza yardımcı olacağız!";
}
function translateToEnglish(){
    document.getElementsByClassName("head1")[0].textContent="Welcome to TwoWheelLife!";

    document.getElementsByClassName("head2")[0].textContent="Don't worry if you're unfamiliar with motorcycles; we're here to guide you!";


    document.getElementsByClassName("p1")[0].textContent="Are you looking for the perfect motorcycle that fits your budget and preferences? You're in the right place! At TwoWheelLife, we understand that choosing the right motorcycle can be a daunting task. Whether you're a seasoned rider or a beginner, our comprehensive guides and expert tips will help you navigate the vast world of motorcycles. From sporty models to cruisers, we've got options for every taste and budget";
    
    document.getElementsByClassName("p2")[0].textContent="Together, we'll help you find the best options available!";

}

document.getElementsByClassName("tr")[0].onclick=translateToTurkish;
document.getElementsByClassName("eng")[0].onclick=translateToEnglish;

