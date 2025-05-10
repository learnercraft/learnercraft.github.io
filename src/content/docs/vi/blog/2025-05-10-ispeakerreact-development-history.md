---
title: Lịch sử phát triển của iSpeakerReact
date: 2025-05-10
authors:
  - yell0wsuit
---

## Khởi đầu

Trước khi được gọi là *iSpeakerReact*, dự án này có tên là *iSpeaker*.

Nó bắt nguồn từ phiên bản nằm trong đĩa CD-ROM kèm theo *Từ điển Oxford Advanced Learner’s Dictionary, ấn bản thứ 9* phát hành năm 2015.

![Ảnh chụp màn hình Oxford iSpeaker](/images/blog/2025-05-10-ispeakerreact-development-history-image-01.webp)

Công cụ này do Oxford University Press phát triển, tích hợp nhiều tính năng giống với iSpeakerReact ngày nay. Nó được xây dựng bằng [AngularJS ↗](https://angularjs.org/) và [jQuery ↗](https://jquery.com/).

Tuy nhiên, vì phụ thuộc vào Node.js, ứng dụng này không thể chạy trực tiếp trên trình duyệt thông thường. Do đó, chúng tôi đã sửa đổi mã nguồn để ứng dụng tương thích với trình duyệt. Đáng tiếc, chúng tôi buộc phải loại bỏ một số tính năng như ghi âm vì thời điểm đó trình duyệt chưa hỗ trợ tốt. Giao diện cũng còn nhiều lỗi và không thân thiện, đặc biệt trên thiết bị di động.

<!-- excerpt -->

## Đợt làm mới đầu tiên

Năm 2023, chúng tôi tiến hành làm mới giao diện lần đầu tiên ([xem pull request ↗](https://github.com/yllst-testing-labs/ispeakerreact/pull/1)). Chúng tôi sử dụng Bootstrap 5 để hiện đại hóa giao diện.

![Ảnh chụp lần làm mới đầu tiên](/images/blog/2025-05-10-ispeakerreact-development-history-image-02.webp)

Nhờ có Bootstrap 5, ứng dụng trông bắt mắt hơn và phản hồi tốt hơn với thiết bị. Đồng thời, chúng tôi cũng thêm chế độ nền tối lần đầu tiên.

Tuy nhiên, phần lõi vẫn sử dụng AngularJS – một thư viện đã bị khai tử vào năm 2022. Điều đó khiến chúng tôi nhận ra rằng, cần viết lại toàn bộ ứng dụng từ đầu.

## Suy nghĩ lại về ứng dụng

Chúng tôi bắt đầu cân nhắc xây dựng lại ứng dụng.

Ý tưởng đầu tiên là chuyển sang [Angular ↗](https://angular.io/), phiên bản kế nhiệm hiện đại của AngularJS. Tuy nhiên, chúng tôi thấy Angular khá khó học vì khác biệt hoàn toàn với AngularJS.

Chúng tôi chuyển sang thử [Vue.js ↗](https://vuejs.org/). Nhưng việc học phát triển SPA (ứng dụng một trang) từ đầu rất khó khăn. Chúng tôi thậm chí gặp khó khăn ngay từ việc tạo trang chủ – loay hoay chỉnh CSS và cố tích hợp JavaScript thuần của Bootstrap 🤦‍♂️. Cuối cùng, chúng tôi từ bỏ Vue.

## Đợt làm mới thứ hai

Tháng 3 năm 2024, sau khi có quyền truy cập vào ChatGPT, chúng tôi nhờ ChatGPT giúp xây dựng lại ứng dụng bằng [React ↗](https://react.dev/). ChatGPT hỗ trợ tạo cấu trúc ban đầu của dự án, giúp chúng tôi có nền tảng để bắt đầu. Lúc đó, chúng tôi dùng [Create React App ↗](https://create-react-app.dev/) để khởi tạo dự án.

Trong phiên bản React, chúng tôi đã tích hợp thành công chức năng ghi âm. Tuy nhiên, lại gặp sự cố phát âm thanh trên iOS 16. Dù mất gần một tháng tìm cách khắc phục, chúng tôi vẫn chưa giải quyết được.

Năm tháng sau, chúng tôi tiếp tục dự án. Lúc này, Create React App đang dần bị khai tử, nên chúng tôi chuyển sang [Vite ↗](https://vitejs.dev/). Dù CRA dễ dùng cho người mới, nhưng Vite lại nhanh hơn và phù hợp hơn – đặc biệt là để đưa lên GitHub Pages.

Chúng tôi bắt đầu tích hợp lại các tính năng chính từ phiên bản cũ, bắt đầu với phần Hội thoại và Bài kiểm tra, sau đó là Bài tập.

Ngày 6 tháng 9 năm 2024, phiên bản mới được chính thức hoàn thiện và ra mắt – sau nhiều tháng lập trình, sửa lỗi, và hỏi cả ChatGPT lẫn Claude.

Để thể hiện sự thay đổi mới, ứng dụng được đổi tên thành *iSpeakerReact* – thể hiện cả công nghệ hiện đại và tính năng mở rộng, lấy cảm hứng từ ứng dụng gốc.

![Ảnh chụp lần làm mới thứ hai](/images/blog/2025-05-10-ispeakerreact-development-history-image-03.webp)

## Hỗ trợ Electron

Để ứng dụng có thể chạy ngoại tuyến, chúng tôi tích hợp hỗ trợ [Electron](https://www.electronjs.org/) ([xem pull request ↗](https://github.com/yllst-testing-labs/ispeakerreact/pull/13)).

Phiên bản ban đầu, *iSpeaker: Pronunciation Tool*, từng có mặt trên Microsoft Store. Nó dựa trên bản làm mới đầu tiên và được đóng gói kèm file âm thanh và video. Tuy nhiên, kích thước file khoảng 3GB khiến việc phân phối và cập nhật trở nên khó khăn.

Với Electron, chúng tôi loại bỏ video được đóng gói sẵn và thêm chức năng tải video từ nguồn trực tuyến, giảm kích thước xuống còn khoảng 700MB.

Chúng tôi cũng thêm tính năng ghi log trong phiên bản Electron, giúp người dùng dễ báo lỗi.

Để tự động hóa việc phát hành, chúng tôi viết script để xây dựng và tải ứng dụng lên GitHub Releases. Thiết lập này rất khó – mỗi lần chạy thử phải chờ gần 15 phút chỉ để thấy lỗi 😩. Sau nhiều lần thử sai (và nhờ cả ChatGPT và Claude), cuối cùng cũng thành công. Tạo bản phát hành thủ công cũng được, nhưng không an toàn và khó kiểm chứng nguồn.

## Hỗ trợ đa ngôn ngữ

Ban đầu, toàn bộ giao diện chỉ có tiếng Anh. Chúng tôi sau đó đã thêm hỗ trợ đa ngôn ngữ ([xem pull request ↗](https://github.com/yllst-testing-labs/ispeakerreact/pull/15)), cho phép dịch ứng dụng sang nhiều ngôn ngữ.

Ngôn ngữ được hỗ trợ đầu tiên là tiếng Trung, nhờ sự đóng góp của [@wekik](https://github.com/wekik).

Chúng tôi bắt đầu với Crowdin, nhưng sớm đạt giới hạn của gói miễn phí. Sau khi xin hỗ trợ gói mã nguồn mở (open-source), chúng tôi tiếp tục được một thời gian, cho đến khi Crowdin bất ngờ khóa dự án mà không báo trước. Một cú sốc thật sự. (Lưu ý cho các dự án sau: đừng dùng Crowdin.)

Chúng tôi chuyển sang [Weblate ↗](https://weblate.org/), và đó là lựa chọn hoàn hảo. Nền tảng mã nguồn mở, giới hạn hào phóng, và tích hợp tốt với GitHub. Ban đầu thiết lập hơi phức tạp, nhưng về lâu dài rất đáng.

![Trang web Weblate](/images/blog/2025-05-10-ispeakerreact-development-history-image-04.webp)

:::note

Cần lắm người dịch sang tiếng Việt 🥲🥲.

:::

## Đợt làm mới thứ ba

Dù Bootstrap mang lại nền tảng vững chắc, giao diện lại có phần giống với các trang web Bootstrap khác.

Hệ thống thiết kế của nó cũng khá cứng nhắc, hạn chế khả năng tùy biến.

Vì thế, chúng tôi chuyển sang dùng [TailwindCSS ↗](https://tailwindcss.com/) và [daisyUI ↗](https://daisyui.com/). Bộ đôi này cho phép chúng tôi tạo hệ thống thiết kế linh hoạt và độc đáo hơn. Chúng tôi chọn màu xanh lá làm màu chủ đạo – dịu mắt và dễ chịu hơn so với màu xanh mặc định.

Trước khi có daisyUI, việc dùng Tailwind đơn lẻ khá cực – khó giữ nhất quán, phải viết nhiều mã lặp. daisyUI giúp đơn giản hóa quy trình, mà vẫn giữ được tính linh hoạt của Tailwind. Khác với Bootstrap, chúng tôi không cần CSS/Sass tùy chỉnh – chỉ cần dùng HTML class của Tailwind.

![Ảnh chụp lần làm mới thứ ba](/images/blog/2025-05-10-ispeakerreact-development-history-image-05.webp)

Đây là phiên bản hiện tại của ứng dụng.

## Phần từ vựng

Qua thời gian, chúng tôi bắt đầu thêm các tính năng mới mà phiên bản gốc không có – hoặc không thể khả thi để thêm vào bản gốc.

Tính năng lớn đầu tiên là phần *Từ vựng* ([xem pull request ↗](https://github.com/yllst-testing-labs/ispeakerreact/pull/33)). Phần này giúp người học luyện phát âm các từ thông dụng trong danh sách Oxford 3000™ và 5000™. Mỗi từ được chia thành các âm tiết, với trọng âm chính và phụ được đánh dấu rõ ràng.

![Ảnh chụp phần từ vựng](/images/blog/2025-05-10-ispeakerreact-development-history-image-06.webp)

Điểm nổi bật là tính năng làm nổi bật âm tiết theo thời gian thực, giúp người học biết chính xác cần đọc âm ở đâu. Ngoài ra còn có chế độ phát chậm để luyện tập dễ hơn.

## Kế hoạch sắp tới

Chúng tôi vẫn đang liên tục cải thiện ứng dụng – sửa lỗi, thêm tính năng, và nâng cao bảo mật.

Nếu bạn có góp ý hay đề xuất, đừng ngần ngại [mở issue trên GitHub ↗](https://github.com/yllst-testing-labs/ispeakerreact/issues).
