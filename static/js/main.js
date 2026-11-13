/*
 * StaGra project page interactions.
 * Before the conference, replace null with the real public URLs below.
 * Example: paper: "./static/files/stagra-paper.pdf"
 */
const RESOURCE_LINKS = Object.freeze({
  paper: null,
  code: null,
  poster: null
});

const vi = {
  skip: "Bỏ qua đến nội dung chính",
  nav_aria: "Điều hướng chính",
  language_aria: "Ngôn ngữ",
  nav_overview: "Tổng quan",
  nav_ideas: "Ý tưởng chính",
  nav_method: "Phương pháp",
  nav_evaluation: "Đánh giá",
  nav_resources: "Tài nguyên",
  venue: "Chấp nhận tại SoICT 2026",
  hero_note: "Diễn giải được · Theo từng khối ảnh · Không huấn luyện",
  paper_title: "Phân đoạn MRI bằng khung Thống kê–Đồ thị không cần huấn luyện",
  summary: "StaGra kết hợp mô hình hóa cường độ thống kê và tinh chỉnh bằng graph-cut 3D để phân đoạn các vùng phụ của khối u não từ MRI đa chuỗi xung mà không huấn luyện một mô hình phân đoạn dùng chung trên nhiều đối tượng.",
  authors_aria: "Tác giả",
  affiliations_label: "Tác giả và đơn vị công tác",
  equal_contribution: "Đồng đóng góp với vai trò tác giả chính.",
  resources_aria: "Tài nguyên dự án",
  paper_pdf: "Bài báo PDF",
  github_code: "Mã nguồn GitHub",
  conference_poster: "Poster hội nghị",
  bibtex: "BibTeX",
  coming_soon: "Sắp cập nhật",
  copy_citation: "Sao chép trích dẫn",
  hero_visual_aria: "Tóm tắt phương pháp StaGra",
  at_glance: "TÓM TẮT PHƯƠNG PHÁP",
  wt_short: "Toàn bộ khối u",
  tc_short: "Lõi khối u",
  et_short: "Vùng tăng quang",
  flow_localize: "Định vị",
  flow_model: "Mô hình hóa",
  flow_refine: "Tinh chỉnh",
  visual_caption: "Bốn chuỗi xung MRI đầu vào. Ba vùng BraTS tiêu chuẩn đầu ra—không cần huấn luyện mô hình xuyên đối tượng.",
  modalities_aria: "Các chuỗi xung MRI đầu vào",
  inputs: "ĐẦU VÀO MRI",
  t1_desc: "Giải phẫu",
  t1ce_desc: "Tăng quang",
  t2_desc: "Nhạy với dịch",
  flair_desc: "Tương phản tổn thương",
  outputs: "Các vùng phân đoạn",
  overview_kicker: "Bài toán và cách tiếp cận",
  overview_title: "Khớp theo từng khối ảnh.<br>Tôn trọng cấu trúc không gian.",
  overview_p1: "Phân đoạn khối u não đòi hỏi xác định các cấu trúc có cường độ chồng lấn và ranh giới bất quy tắc. StaGra khảo sát một cách tiếp cận thống kê được khớp riêng cho từng khối ảnh MRI và sử dụng quan hệ không gian để tinh chỉnh kết quả phân đoạn.",
  overview_p2: "Khung phương pháp nhận bốn chuỗi xung MRI—T1, T1 tăng cường tương phản (T1ce), T2 và FLAIR—và hoạt động qua hai giai đoạn. Đầu tiên, phân ngưỡng thích nghi đa mặt phẳng xác định vùng khối u ứng viên. Trong vùng này, ước lượng mật độ kernel cung cấp các điểm khởi tạo cho mô hình hỗn hợp Gaussian có trọng số. Sau đó, graph-cut ba chiều tinh chỉnh việc gán voxel bằng mô hình năng lượng không gian. Ánh xạ mô dựa trên cường độ và hậu xử lý tạo ra các mặt nạ toàn bộ khối u, lõi khối u và khối u tăng quang.",
  training_free_label: "“Không cần huấn luyện” nghĩa là gì",
  overview_note: "Ở đây, “không cần huấn luyện” chỉ việc không huấn luyện mô hình trên nhiều đối tượng. StaGra vẫn ước lượng các tham số hỗn hợp cho từng khối ảnh và sử dụng các siêu tham số cùng quy tắc gán mô được chỉ định thủ công.",
  regions_kicker: "Giải phẫu tương tác",
  regions_title: "Ba vùng.<br>Một cấu trúc lồng nhau.",
  regions_intro: "Khám phá quan hệ giữa ba vùng đánh giá BraTS tiêu chuẩn. Hình bên dưới là sơ đồ minh họa, không phải ảnh MRI chẩn đoán.",
  teaser_alt: "Tổng quan MRI đa chuỗi xung của StaGra",
  region_svg_title: "Sơ đồ các vùng khối u BraTS lồng nhau",
  region_svg_desc: "Khối u tăng quang nằm trong lõi khối u, và lõi khối u nằm trong toàn bộ khối u.",
  region_wt_aria: "WT — Toàn bộ khối u",
  region_tc_aria: "TC — Lõi khối u",
  region_et_aria: "ET — Khối u tăng quang",
  schematic_label: "SƠ ĐỒ MINH HỌA — KHÔNG PHẢI ẢNH CHẨN ĐOÁN",
  region_controls_aria: "Chọn vùng khối u",
  all_regions: "Tất cả vùng",
  nested_hierarchy: "CẤU TRÚC LỒNG NHAU",
  all_title: "ET nằm trong TC, và TC nằm trong WT",
  all_copy: "Ba vùng mô tả các cấu trúc khối u ngày càng tập trung hơn được sử dụng trong đánh giá BraTS.",
  ideas_kicker: "Nguyên lý thiết kế",
  ideas_title: "Ba ý tưởng dẫn dắt<br>toàn bộ phương pháp.",
  ideas_intro: "StaGra thu hẹp vùng tìm kiếm, học cấu trúc cường độ từ khối ảnh hiện tại, sau đó khôi phục tính nhất quán không gian.",
  idea1_title: "Định vị trước khi mô hình hóa",
  idea1_copy: "Vùng ứng viên tập trung phân tích thống kê vào mô có khả năng bất thường. Phân ngưỡng thích nghi trên ba mặt phẳng trực giao kết hợp thông tin không gian bổ sung trước khi lọc theo thể tích.",
  idea2_title: "Khởi tạo từ mật độ ảnh",
  idea2_copy: "Ước lượng mật độ kernel xác định các vị trí mật độ cao trong không gian đặc trưng đa chuỗi xung. Các vị trí này khởi tạo mô hình hỗn hợp Gaussian, dùng để ước lượng phân bố cường độ liên quan đến mô trong vùng ứng viên.",
  idea3_title: "Tinh chỉnh bằng cấu trúc không gian 3D",
  idea3_copy: "Các phép gán thống kê theo voxel có thể bị phân mảnh trong không gian. StaGra kết hợp chi phí dữ liệu với hình phạt lân cận nhạy tương phản và áp dụng các bước graph-cut để tìm một phép gán nhãn thể tích có năng lượng thấp hơn.",
  method_kicker: "Sơ đồ tương tác",
  method_title: "Từ vùng ứng viên<br>đến mặt nạ nhất quán.",
  method_intro: "Chọn từng nút để xem vai trò của nó. Sơ đồ chỉ tóm tắt mô tả dự án được cung cấp, không thêm chi tiết toán học chưa công bố.",
  pipeline_alt: "Pipeline hai giai đoạn của StaGra",
  stage1_short: "Định vị vùng ứng viên",
  stage2_short: "Thống kê và không gian",
  stage1_title: "Định vị vùng ứng viên",
  stage1_blurb: "Dùng bằng chứng FLAIR đa mặt phẳng để xác định miền hoạt động của bước mô hình hóa tiếp theo.",
  input: "ĐẦU VÀO",
  flair_views_short: "Axial · Coronal · Sagittal",
  operation: "THAO TÁC",
  threshold_short: "Phân ngưỡng thích nghi",
  intensity_rules: "+ quy tắc cường độ",
  fusion: "KẾT HỢP",
  voting_short: "Bỏ phiếu có trọng số",
  three_views: "ba mặt phẳng",
  filter: "LỌC",
  morph_short: "Lọc theo thể tích",
  morph_ops: "+ hình thái học",
  output: "ĐẦU RA",
  roi_short: "ROI ứng viên",
  active_domain: "miền hoạt động",
  stage2_title: "Mô hình hóa thống kê và tinh chỉnh không gian",
  stage2_blurb: "Ước lượng cấu trúc cường độ theo từng khối ảnh, sau đó tìm phép gán nhãn 3D có năng lượng thấp hơn.",
  prepare: "CHUẨN BỊ",
  standardize_short: "Chuẩn hóa + gán trọng số",
  kde_short: "Các đỉnh mật độ",
  gmm_short: "Năm thành phần",
  map: "ÁNH XẠ",
  mapping_short: "Ưu tiên gán mô",
  potts_short: "Năng lượng Potts",
  refine: "TINH CHỈNH",
  node_flair_title: "FLAIR đa mặt phẳng",
  node_flair_copy: "Ảnh FLAIR được xử lý theo các hướng axial, coronal và sagittal nhằm thu thập thông tin không gian bổ sung cho việc định vị vùng ứng viên.",
  stage1_p1: "Ảnh FLAIR được xử lý theo ba hướng trực giao. Phân ngưỡng thích nghi và các quy tắc cường độ tạo ra các mặt nạ ứng viên, sau đó được kết hợp bằng bỏ phiếu có trọng số. Lọc theo thể tích và các phép toán hình thái hợp nhất vùng quan tâm ứng viên.",
  why_it_matters: "Tại sao điều này quan trọng:",
  stage1_p2: "Vùng này xác định miền không gian cho giai đoạn tiếp theo. Vì vậy, độ bao phủ của vùng ứng viên rất quan trọng: mô khối u bị loại ở giai đoạn này không thể được phục hồi bởi bước mô hình hóa sau đó vốn chỉ hoạt động trong vùng này.",
  stage2_p1: "Mỗi voxel hoạt động được biểu diễn bằng cường độ T1, T1ce, T2 và FLAIR đã chuẩn hóa. Gán trọng số quan trọng và chuẩn hóa đặc trưng chuẩn bị các đặc trưng đa chuỗi xung cho ước lượng mật độ và khớp mô hình hỗn hợp.",
  stage2_p2: "Các đỉnh mật độ kernel khởi tạo mô hình hỗn hợp Gaussian năm thành phần. Thuật toán kỳ vọng–tối đa hóa có trọng số ước lượng các tham số hỗn hợp cho khối ảnh hiện tại. Các quy tắc cường độ cố định liên kết các thành phần thu được với các loại mô và bổ sung ưu tiên cho việc gán nhãn voxel.",
  stage2_p3: "Tinh chỉnh không gian sử dụng mô hình Potts nhạy tương phản trên các voxel lân cận trong không gian ba chiều. Chi phí đơn phân mã hóa bằng chứng thống kê, còn chi phí cặp phạt sự khác biệt nhãn theo tương phản đặc trưng cục bộ. Các bước alpha-expansion graph-cut xấp xỉ cực tiểu hóa năng lượng đa nhãn này; chúng không bảo đảm cực tiểu toàn cục chính xác.",
  outputs_kicker: "Các vùng đầu ra",
  outputs_title: "Góc nhìn BraTS<br>tiêu chuẩn về kết quả.",
  outputs_intro: "Đầu ra cuối cùng được biểu diễn bằng ba vùng đánh giá BraTS tiêu chuẩn.",
  wt_title: "Toàn bộ khối u",
  wt_copy: "Phù, lõi hoại tử hoặc không tăng quang, và khối u tăng quang",
  tc_title: "Lõi khối u",
  tc_copy: "Lõi hoại tử hoặc không tăng quang và khối u tăng quang",
  et_title: "Khối u tăng quang",
  et_copy: "Thành phần khối u tăng quang",
  evaluation_kicker: "Đánh giá và giới hạn",
  evaluation_title: "Đo lường cẩn trọng.<br>Diễn giải thận trọng.",
  evaluation_intro: "Mô tả dự án công khai giải thích giao thức mà không công bố các điểm số hoặc thời gian chạy chưa được xác nhận.",
  overlap_metric: "ĐỘ ĐO CHỒNG LẤN",
  dice_copy: "Độ tương đồng Dice đo mức chồng lấn với phân đoạn tham chiếu. Giá trị cao hơn biểu thị mức tương đồng tốt hơn theo giao thức đánh giá được chỉ định.",
  boundary_metric: "ĐỘ ĐO RANH GIỚI",
  hd_copy: "Khoảng cách Hausdorff phân vị 95 đo mức bất đồng về ranh giới. Giá trị thấp hơn biểu thị mức tương đồng tốt hơn theo giao thức được chỉ định.",
  protocol_title: "Bối cảnh giao thức",
  evaluation_p1: "Nghiên cứu sử dụng MRI đa chuỗi xung từ BraTS 2021 và khảo sát phân đoạn WT, TC và ET.",
  evaluation_p2: "So sánh toàn bộ pipeline và thí nghiệm loại bỏ thành phần trả lời những câu hỏi khác nhau. So sánh với các pipeline phân đoạn khác đánh giá hành vi tổng thể, trong khi các thí nghiệm loại bỏ có kiểm soát khảo sát từng lựa chọn trong StaGra, chẳng hạn khởi tạo hoặc suy luận không gian. Không nên quy khác biệt giữa các pipeline hoàn chỉnh cho một thành phần riêng lẻ nếu thành phần đó chưa được cô lập bằng thực nghiệm.",
  scope_label: "PHẠM VI VÀ HẠN CHẾ",
  scope_title: "Một nghiên cứu có thể diễn giải—không phải tuyên bố lâm sàng.",
  scope_p1: "StaGra khảo sát một cách tiếp cận có thể diễn giải, hoạt động theo từng khối ảnh cho phân đoạn khối u não. Đầu ra phụ thuộc vào độ bao phủ của vùng ứng viên, chuẩn hóa cường độ, quy tắc gán mô và hậu xử lý. Cường độ mô chồng lấn cùng các thành phần khối u nhỏ hoặc rời rạc có thể gây khó khăn cho phân đoạn.",
  scope_p2: "Đánh giá trên dữ liệu BraTS đã tiền xử lý không chứng minh hiệu năng trên các ca thu nhận lâm sàng tùy ý, dữ liệu thiếu chuỗi xung MRI hoặc giao thức thu nhận chưa từng gặp. Các ứng dụng tiềm năng cho định vị thô hoặc tạo nhãn giả cần được thẩm định thêm theo từng tác vụ cụ thể.",
  resources_kicker: "Tài nguyên và liên hệ",
  resources_title: "Tiếp tục khám phá<br>dự án.",
  resources_intro: "Bài báo mô tả phương pháp và giao thức thực nghiệm. Bản phát hành mã nguồn cần xác định rõ triển khai và cấu hình tương ứng với kết quả được báo cáo. Poster cung cấp bản tóm tắt ngắn gọn của nghiên cứu.",
  paper: "Bài báo",
  paper_desc: "Phương pháp và giao thức thực nghiệm",
  code: "Mã nguồn",
  code_desc: "Triển khai và cấu hình",
  poster: "Poster",
  poster_desc: "Tóm tắt ngắn gọn tại hội nghị",
  contact_label: "LIÊN HỆ DỰ ÁN",
  contact_copy: "Nếu có câu hỏi về dự án, vui lòng liên hệ.",
  citation_title: "Trích dẫn StaGra",
  copy_bibtex: "Sao chép BibTeX",
  copied: "Đã sao chép!",
  citation_note: "Trích dẫn tối thiểu chỉ sử dụng metadata công khai đã được xác nhận. Hãy cập nhật khi hồ sơ camera-ready được công bố.",
  footer_tagline: "Mô hình hóa thống kê. Tinh chỉnh dựa trên đồ thị. Theo từng khối ảnh.",
  attribution_before: "Mẫu website được chuyển thể từ",
  attribution_after: "của Keunhong Park và các cộng sự.",
  license_before: "Được cấp phép theo",
  back_top: "Về đầu trang"
};

const regionContent = {
  en: {
    all: ["NESTED HIERARCHY", "ET is contained in TC, and TC in WT", "Together, the three regions describe progressively more focused tumor structures used in BraTS evaluation."],
    wt: ["WHOLE TUMOR · WT", "The complete tumor extent", "Edema, necrotic or non-enhancing core, and enhancing tumor."],
    tc: ["TUMOR CORE · TC", "The central tumor components", "Necrotic or non-enhancing core and enhancing tumor."],
    et: ["ENHANCING TUMOR · ET", "The enhancing component", "The enhancing tumor component."]
  },
  vi: {
    all: ["CẤU TRÚC LỒNG NHAU", "ET nằm trong TC, và TC nằm trong WT", "Ba vùng mô tả các cấu trúc khối u ngày càng tập trung hơn được sử dụng trong đánh giá BraTS."],
    wt: ["TOÀN BỘ KHỐI U · WT", "Toàn bộ phạm vi khối u", "Phù, lõi hoại tử hoặc không tăng quang, và khối u tăng quang."],
    tc: ["LÕI KHỐI U · TC", "Các thành phần trung tâm của khối u", "Lõi hoại tử hoặc không tăng quang và khối u tăng quang."],
    et: ["KHỐI U TĂNG QUANG · ET", "Thành phần tăng quang", "Thành phần khối u tăng quang."]
  }
};

const nodeContent = {
  en: {
    flair_views: ["01", "STAGE 01 · INPUT", "Multi-planar FLAIR", "FLAIR images are processed across axial, coronal, and sagittal orientations to gather complementary spatial evidence for candidate localization."],
    threshold: ["02", "STAGE 01 · OPERATION", "Adaptive thresholding", "Adaptive thresholding and intensity rules produce a candidate mask in each orthogonal orientation."],
    voting: ["03", "STAGE 01 · FUSION", "Weighted voting", "Candidate masks from the three views are combined by weighted voting to consolidate complementary spatial information."],
    morphology: ["04", "STAGE 01 · FILTER", "Volumetric filtering and morphology", "Volumetric filtering and morphological operations consolidate the candidate region of interest."],
    roi: ["05", "STAGE 01 · OUTPUT", "Candidate ROI", "The candidate region defines the spatial domain for Stage 2. Tumor tissue excluded here cannot be recovered by later modeling restricted to this region."],
    standardize: ["01", "STAGE 02 · PREPARE", "Standardize and weight features", "Each active voxel is represented by normalized T1, T1ce, T2, and FLAIR intensities. Importance weighting and feature standardization prepare the features for density estimation."],
    kde: ["02", "STAGE 02 · INITIALIZE", "Kernel density peaks", "Kernel density estimation identifies high-density locations in the multimodal feature space and provides starting points for mixture fitting."],
    gmm: ["03", "STAGE 02 · MODEL", "Five-component weighted GMM", "KDE peaks initialize a five-component Gaussian mixture model. Weighted expectation–maximization estimates its parameters for the current volume."],
    mapping: ["04", "STAGE 02 · MAP", "Tissue assignment preferences", "Fixed intensity rules associate mixture components with tissue categories and provide additional preferences for voxel labeling."],
    potts: ["05", "STAGE 02 · ENERGY", "3D contrast-sensitive Potts model", "Unary costs encode statistical evidence. Pairwise costs penalize label differences according to local feature contrast between neighboring voxels."],
    graphcut: ["06", "STAGE 02 · REFINE", "Alpha-expansion graph-cut", "Alpha-expansion moves approximately minimize the multi-label spatial energy; they do not guarantee an exact global optimum."],
    masks: ["07", "STAGE 02 · OUTPUT", "WT, TC, and ET masks", "Intensity-based tissue mapping and post-processing produce whole-tumor, tumor-core, and enhancing-tumor masks."]
  },
  vi: {
    flair_views: ["01", "GIAI ĐOẠN 01 · ĐẦU VÀO", "FLAIR đa mặt phẳng", "Ảnh FLAIR được xử lý theo các hướng axial, coronal và sagittal để thu thập thông tin không gian bổ sung cho việc định vị vùng ứng viên."],
    threshold: ["02", "GIAI ĐOẠN 01 · THAO TÁC", "Phân ngưỡng thích nghi", "Phân ngưỡng thích nghi và các quy tắc cường độ tạo một mặt nạ ứng viên ở mỗi hướng trực giao."],
    voting: ["03", "GIAI ĐOẠN 01 · KẾT HỢP", "Bỏ phiếu có trọng số", "Các mặt nạ từ ba mặt phẳng được kết hợp bằng bỏ phiếu có trọng số để hợp nhất thông tin không gian bổ sung."],
    morphology: ["04", "GIAI ĐOẠN 01 · LỌC", "Lọc thể tích và hình thái học", "Lọc theo thể tích cùng các phép toán hình thái hợp nhất vùng quan tâm ứng viên."],
    roi: ["05", "GIAI ĐOẠN 01 · ĐẦU RA", "ROI ứng viên", "Vùng ứng viên xác định miền không gian cho Giai đoạn 2. Mô khối u bị loại ở đây không thể được phục hồi bởi bước mô hình hóa chỉ giới hạn trong vùng này."],
    standardize: ["01", "GIAI ĐOẠN 02 · CHUẨN BỊ", "Chuẩn hóa và gán trọng số", "Mỗi voxel hoạt động được biểu diễn bằng cường độ T1, T1ce, T2 và FLAIR đã chuẩn hóa. Gán trọng số quan trọng và chuẩn hóa đặc trưng chuẩn bị dữ liệu cho ước lượng mật độ."],
    kde: ["02", "GIAI ĐOẠN 02 · KHỞI TẠO", "Các đỉnh mật độ kernel", "Ước lượng mật độ kernel xác định các vị trí mật độ cao trong không gian đặc trưng đa chuỗi xung và cung cấp điểm bắt đầu cho việc khớp mô hình hỗn hợp."],
    gmm: ["03", "GIAI ĐOẠN 02 · MÔ HÌNH", "GMM năm thành phần có trọng số", "Các đỉnh KDE khởi tạo mô hình hỗn hợp Gaussian năm thành phần. EM có trọng số ước lượng tham số cho khối ảnh hiện tại."],
    mapping: ["04", "GIAI ĐOẠN 02 · ÁNH XẠ", "Ưu tiên gán mô", "Các quy tắc cường độ cố định liên kết thành phần hỗn hợp với các loại mô và bổ sung ưu tiên cho việc gán nhãn voxel."],
    potts: ["05", "GIAI ĐOẠN 02 · NĂNG LƯỢNG", "Mô hình Potts 3D nhạy tương phản", "Chi phí đơn phân mã hóa bằng chứng thống kê. Chi phí cặp phạt sự khác biệt nhãn theo tương phản đặc trưng cục bộ giữa các voxel lân cận."],
    graphcut: ["06", "GIAI ĐOẠN 02 · TINH CHỈNH", "Alpha-expansion graph-cut", "Các bước alpha-expansion xấp xỉ cực tiểu hóa năng lượng không gian đa nhãn; chúng không bảo đảm cực tiểu toàn cục chính xác."],
    masks: ["07", "GIAI ĐOẠN 02 · ĐẦU RA", "Mặt nạ WT, TC và ET", "Ánh xạ mô dựa trên cường độ và hậu xử lý tạo ra các mặt nạ toàn bộ khối u, lõi khối u và khối u tăng quang."]
  }
};

let currentLanguage = "en";
let currentRegion = "all";
let currentNode = "flair_views";
const englishText = new Map();
const englishAttributes = new Map();

function captureEnglish() {
  document.querySelectorAll("[data-i18n]").forEach((element) => englishText.set(element, element.innerHTML));
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => englishAttributes.set(element, element.getAttribute("aria-label")));
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => englishAttributes.set(element, element.getAttribute("alt")));
}

function updateRegion(region, announce = true) {
  currentRegion = region;
  const svg = document.querySelector("#region-svg");
  if (region === "all") svg.removeAttribute("data-focus"); else svg.dataset.focus = region;
  document.querySelectorAll(".region-tab").forEach((button) => {
    const active = button.dataset.region === region;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  const content = regionContent[currentLanguage][region];
  document.querySelector("#region-overline").textContent = content[0];
  document.querySelector("#region-detail-title").textContent = content[1];
  document.querySelector("#region-detail-copy").textContent = content[2];
  if (!announce) document.querySelector(".region-detail").setAttribute("aria-live", "off");
  requestAnimationFrame(() => document.querySelector(".region-detail").setAttribute("aria-live", "polite"));
}

function updateNode(node) {
  currentNode = node;
  document.querySelectorAll(".pipeline-node").forEach((button) => {
    const selected = button.dataset.node === node;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  const content = nodeContent[currentLanguage][node];
  document.querySelector("#node-detail-number").textContent = content[0];
  document.querySelector("#node-detail-stage").textContent = content[1];
  document.querySelector("#node-detail-title").textContent = content[2];
  document.querySelector("#node-detail-copy").textContent = content[3];
}

function setLanguage(language, updateUrl = true) {
  currentLanguage = language === "vi" ? "vi" : "en";
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.innerHTML = currentLanguage === "vi" && vi[key] !== undefined ? vi[key] : englishText.get(element);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    element.setAttribute("aria-label", currentLanguage === "vi" && vi[key] ? vi[key] : englishAttributes.get(element));
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    element.setAttribute("alt", currentLanguage === "vi" && vi[key] ? vi[key] : englishAttributes.get(element));
  });
  document.querySelectorAll(".lang-button").forEach((button) => {
    const active = button.dataset.lang === currentLanguage;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  try { localStorage.setItem("stagra_lang", currentLanguage); } catch (_) { /* Storage can be unavailable in privacy mode. */ }
  if (updateUrl) {
    const url = new URL(window.location.href);
    if (currentLanguage === "en") url.searchParams.delete("lang"); else url.searchParams.set("lang", "vi");
    history.replaceState({}, "", url);
  }
  document.title = currentLanguage === "vi" ? "StaGra — Phân đoạn MRI bằng khung Thống kê–Đồ thị" : "StaGra — Training-Free Statistical-Graph MRI Segmentation";
  updateRegion(currentRegion, false);
  updateNode(currentNode);
}

function initialLanguage() {
  const query = new URLSearchParams(window.location.search).get("lang");
  if (query === "vi" || query === "en") return query;
  try { return localStorage.getItem("stagra_lang") === "vi" ? "vi" : "en"; } catch (_) { return "en"; }
}

function setupResources() {
  Object.entries(RESOURCE_LINKS).forEach(([name, href]) => {
    if (!href) return;
    document.querySelectorAll(`[data-resource="${name}"]`).forEach((placeholder) => {
      const link = document.createElement("a");
      link.className = placeholder.className.replace("is-disabled", "");
      link.innerHTML = placeholder.innerHTML;
      link.href = href;
      if (/^https?:/i.test(href)) { link.target = "_blank"; link.rel = "noopener noreferrer"; }
      link.querySelector("small").textContent = currentLanguage === "vi" ? "Mở tài nguyên" : "Open resource";
      placeholder.replaceWith(link);
    });
    const card = document.querySelector(`[data-resource-card="${name}"]`);
    if (card) {
      const link = document.createElement("a");
      link.className = card.className.replace("is-unavailable", "is-available");
      link.innerHTML = card.innerHTML;
      link.href = href;
      if (/^https?:/i.test(href)) { link.target = "_blank"; link.rel = "noopener noreferrer"; }
      const chip = link.querySelector(".status-chip");
      chip.textContent = "Open ↗";
      card.replaceWith(link);
    }
  });
}

function setupOptionalImages() {
  const teaser = document.querySelector("#teaser-image");
  const showTeaser = () => { teaser.hidden = false; document.querySelector("#region-svg").hidden = true; };
  const showExplorer = () => { teaser.hidden = true; document.querySelector("#region-svg").hidden = false; };
  teaser.addEventListener("load", showTeaser);
  teaser.addEventListener("error", showExplorer);
  if (teaser.complete) teaser.naturalWidth > 0 ? showTeaser() : showExplorer();
  const pipeline = document.querySelector("#pipeline-image");
  const updatePipelineImage = () => { pipeline.hidden = !(pipeline.complete && pipeline.naturalWidth > 0); };
  pipeline.addEventListener("load", updatePipelineImage);
  pipeline.addEventListener("error", updatePipelineImage);
  updatePipelineImage();
}

function setupPipeline() {
  document.querySelectorAll(".stage-jump").forEach((button) => button.addEventListener("click", () => {
    const stage = button.dataset.stageJump;
    document.querySelectorAll(".stage-jump").forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll(".pipeline-stage").forEach((panel) => {
      const active = panel.dataset.stage === stage;
      panel.hidden = !active;
      panel.classList.toggle("is-active", active);
    });
    updateNode(stage === "stage1" ? "flair_views" : "standardize");
  }));
  document.querySelectorAll(".pipeline-node").forEach((button) => button.addEventListener("click", () => updateNode(button.dataset.node)));
}

function setupExplorer() {
  document.querySelectorAll(".region-tab").forEach((button) => button.addEventListener("click", () => updateRegion(button.dataset.region)));
  document.querySelectorAll("[data-region-layer]").forEach((layer) => {
    layer.setAttribute("tabindex", "0");
    layer.setAttribute("role", "button");
    const choose = () => updateRegion(layer.dataset.regionLayer);
    layer.addEventListener("click", choose);
    layer.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); choose(); } });
  });
}

function setupCopy() {
  const button = document.querySelector("#copy-bibtex");
  button.addEventListener("click", async () => {
    const text = document.querySelector("#bibtex-code").textContent;
    try {
      await navigator.clipboard.writeText(text);
    } catch (_) {
      const area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.append(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    button.classList.add("is-copied");
    button.querySelector(".copy-icon").textContent = "✓";
    button.querySelector("[data-i18n]").textContent = currentLanguage === "vi" ? vi.copied : "Copied!";
    window.setTimeout(() => {
      button.classList.remove("is-copied");
      button.querySelector(".copy-icon").textContent = "▣";
      button.querySelector("[data-i18n]").textContent = currentLanguage === "vi" ? vi.copy_bibtex : "Copy BibTeX";
    }, 2200);
  });
}

function setupScrollUI() {
  const progress = document.querySelector("#reading-progress-bar");
  const links = [...document.querySelectorAll(".nav-links a")];
  const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0}%`;
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "location"); else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-32% 0px -55%", threshold: 0 });
  sections.forEach((section) => spy.observe(section));
}

function setupReveal() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
  }), { threshold: .08, rootMargin: "0px 0px -35px" });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

document.addEventListener("DOMContentLoaded", () => {
  setupOptionalImages();
  setupResources();
  captureEnglish();
  setupExplorer();
  setupPipeline();
  setupCopy();
  setupScrollUI();
  setupReveal();
  document.querySelectorAll(".lang-button").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
  setLanguage(initialLanguage(), false);
});
