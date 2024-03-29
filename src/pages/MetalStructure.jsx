import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";
import stoyanka from "../img/stoyanka.png";

export default function MetalStructure() {
  return (
    <div className="font-['Ubuntu']">
      <Header />
      <Nav />
      <Carousel />
      <TopMain />
      <Breadcrumb />
      <div className="py-3 2xl max-w-6xl width-full mx-auto container">
        <h1 className="font-bold ">Металлоконструкции</h1>
        <div className="my-6">
          <p className="indent-10">
            Под производство сварных металлоконструкций организована
            производственная база, площадь которой составляет 5200 м²,
            оснащённая грузоподъёмными механизмами грузоподъёмностью 10 и 16 тн.
          </p>
          <p className="indent-10">
            Техническое оснащение базы позволяет изготавливать строительные
            металлоконструкции любой конфигурации и сложности.
          </p>
          <p className="indent-10">
            База оснащена оборудованием, позволяющим выполнять работы по
            изготовлению металлоконструкций с применением автоматической и
            полуавтоматической сварки, фигурного раскроя метала толщиной до 100
            мм.
          </p>
          <p className="indent-10">
            Оборудование базы позволяет производить пескоструйную обработку
            поверхности металлов и наносить антикоррозийные покрытия воздушными
            и безвоздушными аппаратами.
          </p>
          <p className="indent-10">
            Производственная мощность участка металлоконструкций от 500 до 3000
            тонн в месяц.
          </p>
          <p className="mt-5 indent-10 font-bold">
            В течение 2014 года изготовлены и смонтированы металлоконструкции, с
            объемами заказов превышающими 250 тонн:
          </p>
          <p className="indent-10">
            - Изготовлены и смонтированы металлоконструкции: животноводческого
            комплекса, включающего в себя коровник на 2000 голов К.Р.С.
            привязного содержания, курятник на 10000 кур-несушек, зерносклад.
            Общий объём металлоконструкций составил 380 тн.
          </p>
          <p className="indent-10">
            - Изготовлены и поставлены металлоконструкции для сооружения нового
            пригородного терминала существующего вокзала ст. Адлер в объёме 360
            тн.
          </p>
          <p className="indent-10">
            - Изготовлены и смонтированы подкрановые и кровельные конструкции
            склада стали и готовой продукции в объёме 400 тн.
          </p>
          <p className="indent-10">
            - Изготовлены металлоконструкции осветительных мачт и комплекс
            установки гидроочистки вакуумного газойля на ОАО «СНПЗ» в г.
            Сызрань.
          </p>
          <p className="mt-5 indent-10 font-bold">
            В качестве преимуществ нашей компании, при выборе поставщика
            металлоконструкций, компания предлагает следующее:
          </p>
          <p className="indent-10">
            - При изготовлении металлоконструкций из материалов собственного
            производства, снижается транспортно-заготовительная составляющая,
            что влияет на снижение стоимости конечного продукта.
          </p>
          <p className="indent-10">
            - Компания располагает своей логистической базой, облегчающей
            решения по доставке продукции. Компания имеет выгодное
            географическое положение и находится возле федеральной
            автомагистрали М-4 «Дон» .
          </p>
          <p className="indent-10">
            - Кадровый состав компании состоит из высококвалифицированных
            специалистов, имеющих большой опыт в данном направлении и способных
            решать поставленные перед ними задачи любой сложности.
          </p>
          <p className="indent-10">
            - Компания располагает действующими подчинёнными структурами,
            имеющими производственные мощности и допуски СРО, позволяющие
            проводить работы «под ключ» (включая технологическое оборудование),
            начиная с проектных работ, что исключает привлечение других компаний
            для выполнения общих задач, а также облегчает заказчику процедуры
            передачи этапов работ от одного подрядчика другому (поставщик
            металлоконструкций – монтажная организация).
          </p>
          <p className="indent-10">
            - Предоставляются транспортные услуги по доставке товара к месту
            назначения автомобильным транспортом, предприятие удобно расположено
            в непосредственной близости от федеральной автомагистрали М4 «Дон».
            Наличие подъездных железнодорожных путей предоставляет возможность
            отгрузки продукции железнодорожным транспортом с выходом на
            магистральные пути общего пользования ООО «РЖД» Северокавказской
            железной дороги.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}