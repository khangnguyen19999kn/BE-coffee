'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('products', 
     [
       {
        name:"Cà Phê Sữa Đá",
        price:"29.000đ",
        priceDefaut:"39.000đ",
        type:"Cà phê",
        img:"./ProductPic/1639377738_ca-phe-sua-da.jpg",
        introduce:"Cà phê Đắk Lắk nguyên chất được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị."
      
       },
       {
        name:"Cà Phê Sữa Nóng",
        price:"35.000đ",
        priceDefaut:"39.000đ",
        type:"Cà phê",
        img:"./ProductPic/1639377770_cfsua-nong.jpg",
        introduce:"Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị."
      
       },
       {
        name:"Cà Phê Sữa Đá",
        price:"29.000đ",
        priceDefaut:"39.000đ",
        type:"Cà phê",
        img:"./ProductPic/1639377738_ca-phe-sua-da.jpg",
        introduce:"Cà phê Đắk Lắk nguyên chất được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị."
      
       },
       {
        name:"Bạc xỉu",
        price:"29.000đ",
        priceDefaut:"39.000đ",
        type:"Cà phê",
        img:"./ProductPic/1639377904_bac-siu.jpg",
        introduce:"Bạc sỉu chính là Ly sữa trắng kèm một chút cà phê. Thức uống này rất phù hợp những ai vừa muốn trải nghiệm chút vị đắng của cà phê vừa muốn thưởng thức vị ngọt béo ngậy từ sữa."
      
       },
       {
        name:"Bạc xỉu nóng",
        price:"29.000đ",
        priceDefaut:"39.000đ",
        type:"Cà phê",
        img:"./ProductPic/1639377926_bacsiunong.jpg",
        introduce:"Bạc sỉu chính là Ly sữa trắng kèm một chút cà phê. Thức uống này rất phù hợp những ai vừa muốn trải nghiệm chút vị đắng của cà phê vừa muốn thưởng thức vị ngọt béo ngậy từ sữa."
      
       },
       {
        name:"Cà Phê Đen Đá",
        price:"29.000đ",
        priceDefaut:"39.000đ",
        type:"Cà phê",
        img:"./ProductPic/1639377797_ca-phe-den-da.jpg",
        introduce:"Không ngọt ngào như Bạc sỉu hay Cà phê sữa, Cà phê đen mang trong mình phong vị trầm lắng, thi vị hơn. Người ta thường phải ngồi rất lâu mới cảm nhận được hết hương thơm ngào ngạt"
      
       },
       {
        name:"Cà Phê Đen Nóng",
        price:"29.000đ",
        priceDefaut:"39.000đ",
        type:"Cà phê",
        img:"./ProductPic/1639377816_ca-phe-den-nong.jpg",
        introduce:"Không ngọt ngào như Bạc sỉu hay Cà phê sữa, Cà phê đen mang trong mình phong vị trầm lắng, thi vị hơn. Người ta thường phải ngồi rất lâu mới cảm nhận được hết hương thơm ngào ngạt"
      
       },
       {
        name:"Latte Táo Lê Quế (Đá)",
        price:"58.000đ",
        priceDefaut:"69.000đ",
        type:"Cà phê",
        img:"./ProductPic/1645964132_tch-1112202103064.png",
        introduce:"Sự kết hợp giữa cà phê đậm đà với vị ngọt cay nhẹ của quế hòa quyện cùng vị chua dịu của táo lê tạo nên một thức uống tuyệt hảo, đầy thú vị."
      
       },
       {
        name:"Latte Táo Lê Quế (Nóng)",
        price:"58.000đ",
        priceDefaut:"69.000đ",
        type:"Cà phê",
        img:"./ProductPic/1642389486_1638333813-latte-tao-le-que-nong.jpg",
        introduce:"Sự kết hợp giữa cà phê đậm đà với vị ngọt cay nhẹ của quế hòa quyện cùng vị chua dịu của táo lê tạo nên một thức uống tuyệt hảo, đầy thú vị."
      
       },
       {
        name:"Caramel Macchiato Đá",
        price:"58.000đ",
        priceDefaut:"69.000đ",
        type:"Cà phê",
        img:"./ProductPic/1645971206_53476442-2294790520794961-6801279449942720512-n.jpg",
        introduce:"Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê."
       },
       {
        name:"Caramel Macchiato Nóng",
        price:"58.000đ",
        priceDefaut:"69.000đ",
        type:"Cà phê",
        img:"./ProductPic/caramelmacchiatonong_168039.jpg",
        introduce:"Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê."
      
       },
       {
        name:"Cà Phê Sữa Đá",
        price:"29.000đ",
        priceDefaut:"39.000đ",
        type:"Cà phê",
        img:"./ProductPic/1639377738_ca-phe-sua-da.jpg",
        introduce:"Cà phê Đắk Lắk nguyên chất được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị."
      
       },
       {
        name:"Latte Đá",
        price:"49.000đ",
        priceDefaut:"59.000đ",
        type:"Cà phê",
        img:"./ProductPic/latte-da_438410.jpg",
        introduce:"Một sự kết hợp tinh tế giữa vị đắng cà phê Espresso nguyên chất hòa quyện cùng vị sữa nóng ngọt ngào, bên trên là một lớp kem mỏng nhẹ tạo nên một tách cà phê hoàn hảo về hương vị lẫn nhãn quan."
      
       },
       {
       name:"Latte Nóng",
       price:"49.000đ",
       priceDefaut:"59.000đ",
       type:"Cà phê",
       img:"./ProductPic/latte_851143.jpg",
       introduce:"Một sự kết hợp tinh tế giữa vị đắng cà phê Espresso nguyên chất hòa quyện cùng vị sữa nóng ngọt ngào, bên trên là một lớp kem mỏng nhẹ tạo nên một tách cà phê hoàn hảo về hương vị lẫn nhãn quan."
     
      },
       {
        name:"Americano Đá",
        price:"40.000đ",
        priceDefaut:"49.000đ",
        type:"Cà phê",
        img:"./ProductPic/classic-cold-brew_791256.jpg",
        introduce:"Americano được pha chế bằng cách pha thêm nước với tỷ lệ nhất định vào tách cà phê Espresso, từ đó mang lại hương vị nhẹ nhàng và giữ trọn được mùi hương cà phê đặc trưng."
      
       },
       {
        name:"Americano Nóng",
        price:"40.000đ",
        priceDefaut:"49.000đ",
        type:"Cà phê",
        img:"./ProductPic/1636647328_arme-nong.jpg",
        introduce:"Americano được pha chế bằng cách pha thêm nước với tỷ lệ nhất định vào tách cà phê Espresso, từ đó mang lại hương vị nhẹ nhàng và giữ trọn được mùi hương cà phê đặc trưng."
      
       },
       {
        name:"Cappuccino Đá",
        price:"49.000đ",
        priceDefaut:"59.000đ",
        type:"Cà phê",
        img:"./ProductPic/Capu-da_487470.jpg",
        introduce:"Capuchino là thức uống hòa quyện giữa hương thơm của sữa, vị béo của bọt kem cùng vị đậm đà từ cà phê Espresso. Tất cả tạo nên một hương vị đặc biệt, một chút nhẹ nhàng, trầm lắng và tinh tế."
      
       },
       {
        name:"Cappuccino Nóng",
        price:"49.000đ",
        priceDefaut:"59.000đ",
        type:"Cà phê",
        img:"./ProductPic/cappuccino_621532.jpg",
        introduce:"Capuchino là thức uống hòa quyện giữa hương thơm của sữa, vị béo của bọt kem cùng vị đậm đà từ cà phê Espresso. Tất cả tạo nên một hương vị đặc biệt, một chút nhẹ nhàng, trầm lắng và tinh tế."
      
       },
       {
        name:"Espresso Đá",
        price:"45.000đ",
        priceDefaut:"55.000đ",
        type:"Cà phê",
        img:"./ProductPic/cfdenda-espressoDa_185438.jpg",
        introduce:"Một tách Espresso nguyên bản được bắt đầu bởi những hạt Arabica chất lượng, phối trộn với tỉ lệ cân đối hạt Robusta, cho ra vị ngọt caramel, vị chua dịu và sánh đặc."
      
       },
       {
        name:"Espresso Nóng",
        price:"45.000đ",
        priceDefaut:"55.000đ",
        type:"Cà phê",
        img:"./ProductPic/espressoNong_612688.jpg",
        introduce:"Một tách Espresso nguyên bản được bắt đầu bởi những hạt Arabica chất lượng, phối trộn với tỉ lệ cân đối hạt Robusta, cho ra vị ngọt caramel, vị chua dịu và sánh đặc."
      
       },
       {
        name:"Mocha Đá",
        price:"49.000đ",
        priceDefaut:"59.000đ",
        type:"Cà phê",
        img:"./ProductPic/mocha-da_538820.jpg",
        introduce:"Loại cà phê được tạo nên từ sự kết hợp hoàn hảo của vị đắng đậm đà của Espresso và sốt sô-cô-la ngọt ngào mang tới hương vị đầy lôi cuốn, đánh thức mọi giác quan nên đây chính là thức uống ưa thích của phụ nữ và giới trẻ."
      
       },
       {
        name:"Mocha Nóng",
        price:"49.000đ",
        priceDefaut:"59.000đ",
        type:"Cà phê",
        img:"./ProductPic/mochanong_433980.jpg",
        introduce:"Loại cà phê được tạo nên từ sự kết hợp hoàn hảo của vị đắng đậm đà của Espresso và sốt sô-cô-la ngọt ngào mang tới hương vị đầy lôi cuốn, đánh thức mọi giác quan nên đây chính là thức uống ưa thích của phụ nữ và giới trẻ."
      
       },
       {
        name:"Cold Brew Truyền Thống",
        price:"39.000đ",
        priceDefaut:"49.000đ",
        type:"Cà phê",
        img:"./ProductPic/classic-cold-brew_239501.jpg",
        introduce:"Tại The Coffee House, Cold Brew được ủ và phục vụ mỗi ngày từ 100% hạt Arabica Cầu Đất với hương gỗ thông, hạt dẻ, nốt sô-cô-la đặc trưng, thoang thoảng hương khói nhẹ giúp Cold Brew giữ nguyên vị tươi mới."
      
       },
       {
        name:"Trà Sen Nhãn Sum Vầy",
        price:"58.000đ",
        priceDefaut:"69.000đ",
        type:"Trà trái cây",
        img:"./ProductPic/1642338110_tra-sen-nhan.jpeg",
        introduce:"Thức uống mang hương vị của nhãn, của sen, của trà Oolong đầy thanh mát cho tất cả các thành viên trong dịp Tết này. An lành, thư thái và đậm đà chính là những gì The Coffee House mong muốn gửi trao đến bạn và gia đình."
      
       },
       {
        name:"Trà Dưa Đào Sung Túc",
        price:"58.000đ",
        priceDefaut:"69.000đ",
        type:"Trà trái cây",
        img:"./ProductPic/1642336343_tra-dao-dua-luoi.jpeg",
        introduce:"Vị thơm ngọt của Dưa lưới và đào tươi chua chua trên nền trà Oolong cùng lớp foam cheese mỏng nhẹ tạo nên cảm giác sung túc trong mùa xuân mới."
      
       },
       {
        name:"Trà Sữa Masala Chai Trân Châu (Đá)",
        price:"58.000đ",
        priceDefaut:"69.000đ",
        type:"Trà trái cây",
        img:"./ProductPic/1645972828_tra-sua-masala-chai-tran-chau-da-lifestyle.jpg",
        introduce:"Sự kết hợp hài hòa giữa trà đen mạnh mẽ, sữa ngọt thơm béo với các gia vị thảo mộc ấm nóng từ Ấn Độ, có thêm trân châu mang đến cho bạn một hương vị trà sữa đặc biệt."
      
       },
       {
        name:"Trà Sữa Masala Chai Trân Châu (Nóng)",
        price:"58.000đ",
        priceDefaut:"69.000đ",
        type:"Trà trái cây",
        img:"./ProductPic/1638332229_tra-sua-chai-nong.jpg",
        introduce:"Sự kết hợp hài hòa giữa trà đen mạnh mẽ, sữa ngọt thơm béo với các gia vị thảo mộc ấm nóng từ Ấn Độ, có thêm trân châu mang đến cho bạn một hương vị trà sữa đặc biệt."
      
       },
       {
        name:"Trà Đào Cam Sả - Đá",
        price:"45.000đ",
        priceDefaut:"55.000đ",
        type:"Trà trái cây",
        img:"./ProductPic/tra-dao-cam-xa_668678.jpg",
        introduce:"Vị thanh ngọt của đào, vị chua dịu của Cam Vàng nguyên vỏ, vị chát của trà đen tươi được ủ mới mỗi 4 tiếng, cùng hương thơm nồng đặc trưng của sả chính là điểm sáng làm nên sức hấp dẫn của thức uống này."
      
       },
       {
        name:"Trà Đào Cam Sả - Nóng",
        price:"45.000đ",
        priceDefaut:"55.000đ",
        type:"Trà trái cây",
        img:"./ProductPic/tdcs-nong_288997.jpg",
        introduce:"Vị thanh ngọt của đào, vị chua dịu của Cam Vàng nguyên vỏ, vị chát của trà đen tươi được ủ mới mỗi 4 tiếng, cùng hương thơm nồng đặc trưng của sả chính là điểm sáng làm nên sức hấp dẫn của thức uống này."
      
       },
       {
        name:"Trà Hạt Sen - Đá",
        price:"39.000đ",
        priceDefaut:"49.000đ",
        type:"Trà trái cây",
        img:"./ProductPic/tra-sen_905594.jpg",
        introduce:"Nền trà oolong hảo hạng kết hợp cùng hạt sen tươi, bùi bùi và lớp foam cheese béo ngậy. Trà hạt sen là thức uống thanh mát, nhẹ nhàng phù hợp cho cả buổi sáng và chiều tối."
      
       },
       {
        name:"Trà Hạt Sen - Nóng",
        price:"39.000đ",
        priceDefaut:"49.000đ",
        type:"Trà trái cây",
        img:"./ProductPic/tra-sen-nong_025153.jpg",
        introduce:"Nền trà oolong hảo hạng kết hợp cùng hạt sen tươi, bùi bùi và lớp foam cheese béo ngậy. Trà hạt sen là thức uống thanh mát, nhẹ nhàng phù hợp cho cả buổi sáng và chiều tối."
      
       },
       {
        name:"Trà Đen Macchiato",
        price:"49.000đ",
        priceDefaut:"59.000đ",
        type:"Trà trái cây",
        img:"./ProductPic/tra-den-matchiato_430281.jpg",
        introduce:"Trà đen được ủ mới mỗi ngày, giữ nguyên được vị chát mạnh mẽ đặc trưng của lá trà, phủ bên trên là lớp Macchiato homemade bồng bềnh quyến rũ vị phô mai mặn mặn mà béo béo."
      
       },
       {
        name:"Hồng Trà Sữa Trân Châu",
        price:"59.000đ",
        priceDefaut:"69.000đ",
        type:"Trà trái cây",
        img:"./ProductPic/1645971848_hong-tra-sua-tran-chau-da-lifestyle.jpg",
        introduce:"Thêm chút ngọt ngào cho ngày mới với hồng trà nguyên lá, sữa thơm ngậy được cân chỉnh với tỉ lệ hoàn hảo, cùng trân châu trắng dai giòn có sẵn để bạn tận hưởng từng ngụm trà sữa ngọt ngào thơm ngậy thiệt đã."
      
       },
       {
        name:"Hồng Trà Sữa Trân Châu Nóng",
        price:"59.000đ",
        priceDefaut:"69.000đ",
        type:"Trà trái cây",
        img:"./ProductPic/hong-tra-sua-nong_941687.jpg",
        introduce:"Từng ngụm trà chuẩn gu ấm áp, đậm đà beo béo bởi lớp sữa tươi chân ái hoà quyện. Trà đen nguyên lá âm ấm dịu nhẹ, quyện cùng lớp sữa thơm béo khó lẫn "
      
       },
       {
        name:"Trà Sữa Oolong Nướng",
        price:"50.000đ",
        priceDefaut:"59.000đ",
        type:"Trà trái cây",
        img:"./ProductPic/605da09f717e5d00114a3cda_oolong-nuong-new.jpg",
        introduce:"Đậm đà chuẩn gu - bởi trà oolong nướng đậm vị hoà cùng lớp sữa thơm béo. Hương vị chân ái đúng gu đậm đà "
      
       },
       {
        name:"Trà sữa Oolong Nướng Trân Châu",
        price:"59.000đ",
        priceDefaut:"69.000đ",
        type:"Trà trái cây",
        img:"./ProductPic/1647510917_tra-sua-oolong-nuong-tran-chau-da-lifestyle.jpg",
        introduce:"Hương vị chân ái đúng gu đậm đà với trà oolong được “sao” (nướng) lâu hơn cho hương vị đậm đà, hòa quyện với sữa thơm béo mang đến cảm giác mát lạnh, lưu luyến vị trà sữa đậm đà nơi vòm họng."
      
       },
       {
        name:"Trà Sữa Oolong Nướng Nóng",
        price:"50.000đ",
        priceDefaut:"59.000đ",
        type:"Trà trái cây",
        img:"./ProductPic/oolong-nuong-nong_948581_400x400.jpg",
        introduce:"Đậm đà chuẩn gu - bởi trà oolong nướng đậm vị hoà cùng lớp sữa thơm béo. Hương vị chân ái đúng gu đậm đà - trà oolong được sao (nướng) lâu hơn cho vị đậm đà, hoà quyện với sữa thơm ngậy."
      
       },
       {
        name:"Trà Sữa Mắc Ca Trân Châu",
        price:"49.000đ",
        priceDefaut:"59.000đ",
        type:"Trà trái cây",
        img:"./ProductPic/tra-sua-mac-ca_377522.jpg",
        introduce:"Mỗi ngày với The Coffee House sẽ là điều tươi mới hơn với sữa hạt mắc ca thơm ngon, bổ dưỡng quyện cùng nền trà oolong cho vị cân bằng"
      
       },
       {
        name:"Hồng Trà Latte Macchiato",
        price:"54.000đ",
        priceDefaut:"64.000đ",
        type:"Trà trái cây",
        img:"./ProductPic/1645971378_img-9789.jpg",
        introduce:"Sự kết hợp hoàn hảo bởi hồng trà dịu nhẹ và sữa tươi, nhấn nhá thêm lớp macchiato trứ danh của The Coffee House mang đến cho bạn hương vị trà sữa đúng gu tinh tế và healthy."
      
       },
       {
        name:"Trà Sữa Masala Chai Trân Châu Chai Fresh 500ml",
        price:"107.000đ",
        priceDefaut:"127.000đ",
        type:"Trà trái cây",
        img:"./ProductPic/1638596210_bottle-masalachai-new.jpg",
        introduce:"Phiên bản Chai Fresh tiện lợi với thức uống mới lạ, ngon lành và tốt cho sức khỏe sẽ mang đến cho bạn trải nghiệm tốt hơn bao giờ hết."
      
       },
       {
        name:"Trà Long Nhãn Hạt Chia",
        price:"39.000đ",
        priceDefaut:"49.000đ",
        type:"Trà trái cây",
        img:"./ProductPic/tra-nhan-da_484810.jpg",
        introduce:"Vị nhãn ngọt, tươi mát đặc trưng hoà quyện tinh tế cùng vị trà oolong hảo hạng và hạt chia mang đến cho bạn một thức uống không chỉ thơm ngon mà còn bổ dưỡng."
      
       },
       {
        name:"Trà Long Nhãn Hạt Chia (Nóng)",
        price:"39.000đ",
        priceDefaut:"49.000đ",
        type:"Trà trái cây",
        img:"./ProductPic/nhan-hat-chia--nong_140427.jpg",
        introduce:"Vị nhãn ngọt, tươi mát đặc trưng hoà quyện tinh tế cùng vị trà oolong hảo hạng và hạt chia mang đến cho bạn một thức uống không chỉ thơm ngon mà còn bổ dưỡng."
      
       },
       {
        name:"Trà Sữa Oolong Nướng Trân Châu Chai Fresh 500ML",
        price:"97.000đ",
        priceDefaut:"127.000đ",
        type:"Trà trái cây",
        img:"./ProductPic/1633147069_photo-2021-10-02-10-56-55.jpg",
        introduce:"Phiên bản chai fresh 500ml mới, The Coffee House tin rằng với diện mạo mới: tiện lợi và phù hợp với bình thường mới này, các tín đồ trà sữa sẽ được thưởng thức hương vị đậm đà"
      
       },
       {
        name:"Cà Phê Đá Xay",
        price:"58.000đ",
        priceDefaut:"68.000đ",
        type:"Đá xay",
        img:"./ProductPic/cf-da-xay-(1)_158038.jpg",
        introduce:"Một phiên bản upgrade từ ly cà phê sữa quen thuộc, nhưng lại tỉnh táo và tươi mát hơn bởi lớp đá xay đi kèm. Nhấp 1 ngụm cà phê đá xay là thấy đã, ngụm thứ hai thêm tỉnh táo và cứ thế lôi cuốn bạn đến ngụm cuối cùng."
      
       },
       {
        name:"Cookie Đá Xay",
        price:"58.000đ",
        priceDefaut:"68.000đ",
        type:"Đá xay",
        img:"./ProductPic/1638170021_cookie-da-xay.jpg",
        introduce:"Những mẩu bánh cookies giòn rụm kết hợp ăn ý với sữa tươi, kem tươi béo ngọt và đá xay mát lành, đem đến cảm giác lạ miệng gây thích thú và không thể cưỡng lại. Một món uống phá cách dễ thương đầy mê hoặc."
      
       },
       {
        name:"Chocolate Đá Xay",
        price:"58.000đ",
        priceDefaut:"68.000đ",
        type:"Đá xay",
        img:"./ProductPic/Chocolate-ice-blended_400940.jpg",
        introduce:"Sữa và kem tươi béo ngọt được “cá tính hoá” bởi vị chocolate/sô-cô-la đăng đắng. Dành cho các tín đồ hảo ngọt. Lựa chọn hàng đầu nếu bạn đang cần chút năng lượng tinh thần."
      
       },
       {
        name:"Đào Việt Quất Đá Xay",
        price:"58.000đ",
        priceDefaut:"68.000đ",
        type:"Đá xay",
        img:"./ProductPic/DaoVietQuat_033985.jpg",
        introduce:"Vị đào quen thuộc, được khoác lên mình dáng vẻ thanh mát hơn khi kết hợp với mứt berry và lớp kem ngọt béo ngậy, cho hương vị kích thích vị giác đầy lôi cuốn và khoan khoái ngay từ ngụm đầu tiên."
      
       },
       {
        name:"Yogurt Dưa Lưới phát tài",
        price:"58.000đ",
        priceDefaut:"68.000đ",
        type:"Đá xay",
        img:"./ProductPic/tra-dua-luoi_114296.jpg",
        introduce:"Vị yogurt chua ngọt, mát lạnh tái tê, thêm topping dưa lưới vàng tươi, thơm lừng, vui miệng. Thật khó để không yêu ngay từ ngụm đầu tiên."
      
       },
       {
        name:"Matcha Đá Xay",
        price:"58.000đ",
        priceDefaut:"68.000đ",
        type:"Đá xay",
        img:"./ProductPic/matchadaxay_622077.jpg",
        introduce:"Matcha thanh, nhẫn, và đắng nhẹ được nhân đôi sảng khoái khi uống lạnh. Nhấn nhá thêm những nét bùi béo của kem và sữa. Gây thương nhớ vô cùng!"
      
       },
       {
        name:"Sinh Tố Việt Quất",
        price:"58.000đ",
        priceDefaut:"68.000đ",
        type:"Đá xay",
        img:"./ProductPic/sinh-to-viet-quoc_145138.jpg",
        introduce:"Mứt Việt Quất chua thanh, ngòn ngọt, phối hợp nhịp nhàng với dòng sữa chua bổ dưỡng. Là món sinh tố thơm ngon mà cả đầu lưỡi và làn da đều thích."
      
       },
       {
        name:"Trà Matcha Latte Nóng",
        price:"58.000đ",
        priceDefaut:"68.000đ",
        type:"Đá xay",
        img:"./ProductPic/matcha-latte-_936022.jpg",
        introduce:"Với màu xanh mát mắt của bột trà Matcha, vị ngọt nhẹ nhàng, pha trộn cùng sữa tươi, Matcha Latte sẽ khiến bạn yêu ngay từ lần đầu tiên."
      
       },
       {
        name:"Trà Matcha Latte Đá",
        price:"58.000đ",
        priceDefaut:"68.000đ",
        type:"Đá xay",
        img:"./ProductPic/matcha-latte-da_083173.jpg",
        introduce:"Với màu xanh mát mắt của bột trà Matcha, vị ngọt nhẹ nhàng, pha trộn cùng sữa tươi, Matcha Latte sẽ khiến bạn yêu ngay từ lần đầu tiên."
      
       },
       {
        name:"Chocolate Đá",
        price:"58.000đ",
        priceDefaut:"68.000đ",
        type:"Đá xay",
        img:"./ProductPic/chocolate-da_877186.jpg",
        introduce:"Bột chocolate nguyên chất hoà cùng sữa tươi béo ngậy. Vị ngọt tự nhiên, không gắt cổ, để lại một chút đắng nhẹ, cay cay trên đầu lưỡi."
      
       },
       {
        name:"Chocolate Nóng",
        price:"58.000đ",
        priceDefaut:"68.000đ",
        type:"Đá xay",
        img:"./ProductPic/chocolatenong_949029.jpg",
        introduce:"Bột chocolate nguyên chất hoà cùng sữa tươi béo ngậy. Vị ngọt tự nhiên, không gắt cổ, để lại một chút đắng nhẹ, cay cay trên đầu lưỡi."
      
       },
       {
        name:"Cà Phê Hòa Tan Đậm Vị Việt Túi 40x16G",
        price:"98.000đ",
        priceDefaut:"108.000đ",
        type:"Dùng tại nhà",
        img:"./ProductPic/1642353251_ca-phe-dam-vi-viet-tui-new.jpeg",
        introduce:"Bắt đầu ngày mới với tách cà phê sữa “Đậm vị Việt” mạnh mẽ sẽ giúp bạn luôn tỉnh táo và hứng khởi cho ngày làm việc thật hiệu quả."
      
       },
       {
        name:"Cà Phê Hoà Tan Đậm Vị Việt (18 gói x 16 gam)",
        price:"49.000đ",
        priceDefaut:"68.000đ",
        type:"Dùng tại nhà",
        img:"./ProductPic/1639648313_ca-phe-sua-da-hoa-tan-dam-vi-viet.jpg",
        introduce:"Bắt đầu ngày mới với tách cà phê sữa “Đậm vị Việt” mạnh mẽ sẽ giúp bạn luôn tỉnh táo và hứng khởi cho ngày làm việc thật hiệu quả."
      
       },
       {
        name:"Cà Phê Rang Xay Original 1",
        price:"49.000đ",
        priceDefaut:"68.000đ",
        type:"Dùng tại nhà",
        img:"./ProductPic/1639648297_ca-phe-rang-xay-original-1-250gr.jpg",
        introduce:"Cà phê Original 1 của The Coffee House với thành phần chính cà phê Robusta Đắk Lắk, vùng trồng cà phê nổi tiếng nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại"
      
       },
       {
        name:"Cà Phê Sữa Đá Hòa Tan",
        price:"49.000đ",
        priceDefaut:"68.000đ",
        type:"Dùng tại nhà",
        img:"./ProductPic/cpsd-3in1_971575.jpg",
        introduce:"Thật dễ dàng để bắt đầu ngày mới với tách cà phê sữa đá sóng sánh, thơm ngon như cà phê pha phin. Vị đắng thanh của cà phê hoà quyện với vị ngọt béo của sữa"
      
       },
       {
        name:"Cà Phê Sữa Đá Hòa Tan Túi 25x22G",
        price:"99.000đ",
        priceDefaut:"128.000đ",
        type:"Dùng tại nhà",
        img:"./ProductPic/1639648355_ca-phe-sua-da-hoa-tan-tui-25x22gr.jpg",
        introduce:"Thật dễ dàng để bắt đầu ngày mới với tách cà phê sữa đá sóng sánh, thơm ngon như cà phê pha phin. Vị đắng thanh của cà phê hoà quyện với vị ngọt béo của sữa"
      
       },
       {
        name:"Cà Phê Sữa Đá Pack 6 Lon",
        price:"89.000đ",
        priceDefaut:"98.000đ",
        type:"Dùng tại nhà",
        img:"./ProductPic/p6-lon-3in1_717216.jpg",
        introduce:"Với thiết kế lon cao trẻ trung, hiện đại và tiện lợi, Cà phê sữa đá lon thơm ngon đậm vị của The Coffee House sẽ đồng hành cùng nhịp sống sôi nổi của tuổi trẻ"
      
       },
       {
        name:"Trà Oolong Lá Tearoma 100G",
        price:"98.000đ",
        priceDefaut:"108.000đ",
        type:"Dùng tại nhà",
        img:"./ProductPic/1639648109_tearoma-loosetea-oolong.jpg",
        introduce:"Trà Oolong Tearoma được chọn lọc bởi các búp trà non phủ sương, tươi mát trên cao nguyên Lâm Đồng. Có mùi hương dịu nhẹ hoàn toàn từ tự nhiên, vị hậu ngọt."
      
       },
       {
        name:"Giftset Trà Tearoma",
        price:"169.000đ",
        priceDefaut:"208.000đ",
        type:"Dùng tại nhà",
        img:"./ProductPic/1641440575_gift-set-tearoma-1.jpeg",
        introduce:"Hộp quà tặng với 4 hộp trà túi lọc Tearoma các loại là món quà thật ý nghĩa cho những người thân yêu trong dịp này."
      
       },
       {
        name:"Cà Phê Rich Finish Gu Đậm Tinh Tế (350G)",
        price:"89.000đ",
        priceDefaut:"98.000đ",
        type:"Dùng tại nhà",
        img:"./ProductPic/rich-finish-nopromo_485968.jpg",
        introduce:"The Coffee House hiểu rằng ly cà phê ngon phải đậm đà, rõ vị từ cái chạm đầu tiên đến hậu vị vương vấn. Cà phê Rich Finish mang đến những ly cà phê đậm, thơm"
      
       },
       {
        name:"Cà Phê Peak Flavor Hương Thơm Đỉnh Cao (350G)",
        price:"89.000đ",
        priceDefaut:"98.000đ",
        type:"Dùng tại nhà",
        img:"./ProductPic/peak-plavor-nopromo_715372.jpg",
        introduce:"Được rang dưới nhiệt độ vàng, Cà phê Peak Flavor - Hương thơm đỉnh cao lưu giữ trọn vẹn hương thơm tinh tế đặc trưng của cà phê Robusta Đăk Nông và Arabica Cầu Đất"
      
       },
       {
        name:"Cà Phê Nguyên Hạt Arabica TCH (200gr)",
        price:"89.000đ",
        priceDefaut:"98.000đ",
        type:"Dùng tại nhà",
        img:"./ProductPic/Arabica_1_109041.jpg",
        introduce:"The Coffee House gửi bạn hương vị cà phê từ 100% hạt Arabica, được chọn lọc kỹ lưỡng tại vùng Cầu Đất, với độ cao 1650m. Với vị đắng nhẹ, hậu vị chua thanh, ngọt dịu"
      
       },
       {
        name:"Bánh Mì Que Pate",
        price:"19.000đ",
        priceDefaut:"38.000đ",
        type:"Bánh",
        img:"./ProductPic/1645979401_banh-mi-que-pate-lifestyle-1.jpg",
        introduce:"Vỏ bánh mì giòn tan, kết hợp với lớp nhân pate béo béo đậm đà sẽ là lựa chọn lý tưởng nhẹ nhàng để lấp đầy chiếc bụng đói , cho 1 bữa sáng - trưa - chiều - tối của bạn thêm phần thú vị."
      
       },
       {
        name:"Bánh Mì Que Pate Cay",
        price:"19.000đ",
        priceDefaut:"38.000đ",
        type:"Bánh",
        img:"./ProductPic/banhmique_683851.jpg",
        introduce:"Vỏ bánh mì giòn tan, kết hợp với lớp nhân pate béo béo đậm đà sẽ là lựa chọn lý tưởng nhẹ nhàng để lấp đầy chiếc bụng đói , cho 1 bữa sáng - trưa - chiều - tối của bạn thêm phần thú vị."
      
       },
       {
        name:"Bánh Mì VN Thịt Nguội",
        price:"29.000đ",
        priceDefaut:"38.000đ",
        type:"Bánh",
        img:"./ProductPic/1645980016_anh-mi-vn-thit-nguoi-2.jpeg",
        introduce:"Gói gọn trong ổ bánh mì Việt Nam, là từng lớp chả, từng lớp jambon hòa quyện cùng bơ và pate thơm lừng, thêm dưa rau cho bữa sáng đầy năng lượng."
      
       },
       {
        name:"Croissant trứng muối",
        price:"35.000đ",
        priceDefaut:"38.000đ",
        type:"Bánh",
        img:"./ProductPic/croissant-trung-muoi_880850.jpg",
        introduce:"Croissant trứng muối thơm lừng, bên ngoài vỏ bánh giòn hấp dẫn bên trong trứng muối vị ngon khó cưỡng."
      
       },
       {
        name:"Chà Bông Phô Mai",
        price:"39.000đ",
        priceDefaut:"48.000đ",
        type:"Bánh",
        img:"./ProductPic/cha-bong-pho-mai_204282.jpg",
        introduce:"Chiếc bánh với lớp phô mai vàng sánh mịn bên trong, được bọc ngoài lớp vỏ xốp mềm thơm lừng. Thêm lớp chà bông mằn mặn hấp dẫn bên trên."
      
       },
       {
        name:"Mochi Kem Phúc Bồn Tử",
        price:"19.000đ",
        priceDefaut:"38.000đ",
        type:"Bánh",
        img:"./ProductPic/1643102019_mochi-phucbontu.jpg",
        introduce:"Bao bọc bởi lớp vỏ Mochi dẻo thơm, bên trong là lớp kem lạnh cùng nhân phúc bồn tử ngọt ngào. Gọi 1 chiếc Mochi cho ngày thật tươi mát. Sản phẩm phải bảo quán mát và dùng ngon nhất trong 2h sau khi nhận hàng."
      
       },
       {
        name:"Mochi Kem Việt Quất",
        price:"19.000đ",
        priceDefaut:"38.000đ",
        type:"Bánh",
        img:"./ProductPic/1643102034_mochi-vietquat.jpg",
        introduce:"Bao bọc bởi lớp vỏ Mochi dẻo thơm, bên trong là lớp kem lạnh cùng nhân phúc bồn tử ngọt ngào. Gọi 1 chiếc Mochi cho ngày thật tươi mát. Sản phẩm phải bảo quán mát và dùng ngon nhất trong 2h sau khi nhận hàng."
      
       },
       {
        name:"Mochi Kem Dừa Dứa",
        price:"19.000đ",
        priceDefaut:"38.000đ",
        type:"Bánh",
        img:"./ProductPic/1643101996_mochi-dua.jpg",
        introduce:"Bao bọc bởi lớp vỏ Mochi dẻo thơm, bên trong là lớp kem lạnh cùng nhân phúc bồn tử ngọt ngào. Gọi 1 chiếc Mochi cho ngày thật tươi mát. Sản phẩm phải bảo quán mát và dùng ngon nhất trong 2h sau khi nhận hàng."
      
       },
       {
        name:"Mochi Kem Chocolate",
        price:"19.000đ",
        priceDefaut:"38.000đ",
        type:"Bánh",
        img:"./ProductPic/mochi-choco_560386.jpg",
        introduce:"Bao bọc bởi lớp vỏ Mochi dẻo thơm, bên trong là lớp kem lạnh cùng nhân phúc bồn tử ngọt ngào. Gọi 1 chiếc Mochi cho ngày thật tươi mát. Sản phẩm phải bảo quán mát và dùng ngon nhất trong 2h sau khi nhận hàng."
      
       },
       {
        name:"Mochi Kem Matcha",
        price:"19.000đ",
        priceDefaut:"38.000đ",
        type:"Bánh",
        img:"./ProductPic/mochi-traxanh_505854.jpg",
        introduce:"Bao bọc bởi lớp vỏ Mochi dẻo thơm, bên trong là lớp kem lạnh cùng nhân phúc bồn tử ngọt ngào. Gọi 1 chiếc Mochi cho ngày thật tươi mát. Sản phẩm phải bảo quán mát và dùng ngon nhất trong 2h sau khi nhận hàng."
      
       },
       {
        name:"Mochi Kem Xoài",
        price:"19.000đ",
        priceDefaut:"38.000đ",
        type:"Bánh",
        img:"./ProductPic/1643101968_mochi-xoai.jpg",
        introduce:"Bao bọc bởi lớp vỏ Mochi dẻo thơm, bên trong là lớp kem lạnh cùng nhân phúc bồn tử ngọt ngào. Gọi 1 chiếc Mochi cho ngày thật tươi mát. Sản phẩm phải bảo quán mát và dùng ngon nhất trong 2h sau khi nhận hàng."
      
       },
       {
        name:"Mousse Gấu Chocolate",
        price:"39.000đ",
        priceDefaut:"48.000đ",
        type:"Bánh",
        img:"./ProductPic/1638170066_gau.jpg",
        introduce:"Với vẻ ngoài đáng yêu và hương vị ngọt ngào, thơm béo nhất định bạn phải thử ít nhất 1 lần."
      
       },
       {
        name:"Mousse Tiramisu",
        price:"32.000đ",
        priceDefaut:"38.000đ",
        type:"Bánh",
        img:"./ProductPic/1638170137_tiramisu.jpg",
        introduce:"Hương vị dễ ghiền được tạo nên bởi chút đắng nhẹ của cà phê, lớp kem trứng béo ngọt dịu hấp dẫn"
      
       },
       {
        name:"Mousse Red Velvet",
        price:"32.000đ",
        priceDefaut:"38.000đ",
        type:"Bánh",
        img:"./ProductPic/5dd2087ff2546c2614fb08d1_Red-Velvet_087977.jpg",
        introduce:"Bánh nhiều lớp được phủ lớp kem bên trên bằng Cream cheese."
      
       },
       {
        name:"Mít Sấy",
        price:"19.000đ",
        priceDefaut:"38.000đ",
        type:"Bánh",
        img:"./ProductPic/mit-say_666228.jpg",
        introduce:"Mít sấy khô vàng ươm, giòn rụm, giữ nguyên được vị ngọt lịm của mít tươi."
      
       }




      
       

  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
