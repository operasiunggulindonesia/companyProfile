export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] };

export interface ArticleContent {
  slug: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  body: ArticleBlock[];
}

export const articlesContent: ArticleContent[] = [
  {
    slug: "total-quality-management-tqm",
    image: "/article/article1.png",
    category: "QUALITY MANAGEMENT",
    date: "August 2026",
    readTime: "12 min read",
    title:
      "Total Quality Management (TQM): Pengertian, Prinsip, Tujuan, Manfaat, dan Contoh Penerapan",
    excerpt:
      "Total Quality Management (TQM) adalah pendekatan manajemen yang menempatkan kualitas sebagai tanggung jawab seluruh organisasi, bukan hanya bagian Quality Control atau Quality Assurance. TQM bertujuan membangun budaya perbaikan berkelanjutan dengan melibatkan manajemen, karyawan, proses, pemasok, hingga pelanggan.",
    author: "Timotius Febry",
    authorRole: "Quality Management & Operational Excellence Specialist",
    body: [
      {
        type: "paragraph",
        text: "Dalam lingkungan bisnis yang semakin kompetitif, kualitas tidak lagi hanya berkaitan dengan produk yang bebas cacat. Kualitas juga mencakup konsistensi proses, kecepatan pelayanan, ketepatan pengiriman, efisiensi biaya, pengalaman pelanggan, dan kemampuan perusahaan untuk terus melakukan perbaikan.",
      },
      {
        type: "paragraph",
        text: "Karena itu, penerapan Total Quality Management (TQM) menjadi salah satu pendekatan penting bagi perusahaan yang ingin membangun operational excellence dan meningkatkan daya saing secara berkelanjutan.",
      },
      {
        type: "paragraph",
        text: "Penelitian pada perusahaan dan UKM di Indonesia juga menunjukkan bahwa TQM tidak hanya berkaitan dengan kualitas produk, tetapi memiliki hubungan dengan operational performance dan organizational performance. Sutrisno (2019), misalnya, menunjukkan bahwa elemen soft dan hard TQM berpengaruh terhadap operational performance, sementara operational performance berhubungan dengan pencapaian organizational performance.",
      },

      { type: "heading", text: "Apa Itu Total Quality Management (TQM)?" },
      {
        type: "paragraph",
        text: "Total Quality Management (TQM) adalah pendekatan manajemen menyeluruh yang mengintegrasikan kualitas ke dalam seluruh aktivitas organisasi melalui keterlibatan seluruh anggota organisasi, fokus pada pelanggan, pengendalian proses, pengambilan keputusan berbasis data, dan perbaikan berkelanjutan.",
      },
      {
        type: "paragraph",
        text: 'Kata "Total" dalam TQM memiliki arti penting. Kualitas bukan hanya tanggung jawab departemen Quality, tetapi menjadi tanggung jawab:',
      },
      {
        type: "list",
        items: [
          "Top management",
          "Supervisor",
          "Operator",
          "Sales",
          "Procurement",
          "Production",
          "Warehouse",
          "Logistics",
          "Finance",
          "Human Resources",
          "Supplier",
          "hingga pihak lain yang memengaruhi pengalaman pelanggan",
        ],
      },
      {
        type: "paragraph",
        text: "Dengan demikian, TQM bukan sekadar program untuk mengurangi defect. TQM merupakan filosofi manajemen untuk membangun organisasi yang secara konsisten mampu menghasilkan value bagi pelanggan melalui proses yang terkendali dan terus diperbaiki.",
      },
      {
        type: "paragraph",
        text: "Dalam konteks UKM dan perusahaan yang sedang berkembang, penerapan TQM juga dapat dikombinasikan dengan orientasi kewirausahaan. Sutrisno et al. (2019) menunjukkan bahwa TQM dan entrepreneurial orientation dapat dipandang sebagai strategi yang berkaitan dengan pengembangan kinerja bisnis pada konteks MSMEs.",
      },

      { type: "heading", text: "Mengapa TQM Penting bagi Perusahaan?" },
      {
        type: "paragraph",
        text: "Perusahaan sering kali menganggap masalah kualitas hanya terlihat ketika terjadi produk cacat atau komplain pelanggan. Padahal, masalah kualitas dapat muncul jauh sebelum produk sampai kepada pelanggan. Contohnya:",
      },
      {
        type: "quote",
        text: "Supplier terlambat → material terlambat → produksi tertunda → overtime meningkat → delivery terlambat → customer complaint meningkat.",
      },
      {
        type: "paragraph",
        text: "Dalam kasus tersebut, masalah yang terlihat di pelanggan adalah keterlambatan pengiriman. Namun akar masalahnya mungkin berasal dari:",
      },
      {
        type: "list",
        items: [
          "Supplier management",
          "Purchasing process",
          "Inventory planning",
          "Production planning",
          "Koordinasi antar-departemen",
        ],
      },
      {
        type: "paragraph",
        text: "TQM membantu perusahaan melihat kualitas sebagai sistem yang terintegrasi, bukan sebagai aktivitas inspeksi pada akhir proses. Penelitian Sutrisno (2019) pada 136 perusahaan produksi makanan skala UKM di Jawa Timur memperlihatkan pentingnya melihat TQM secara lebih luas melalui aspek soft dan hard TQM serta kaitannya dengan operational performance dan organizational performance.",
      },

      { type: "heading", text: "Prinsip-Prinsip Total Quality Management" },
      {
        type: "paragraph",
        text: "Walaupun terdapat berbagai pendekatan dalam menjelaskan TQM, terdapat beberapa prinsip utama yang menjadi fondasi penerapannya.",
      },

      { type: "heading", text: "1. Customer Focus" },
      {
        type: "paragraph",
        text: "Prinsip pertama TQM adalah customer focus. Kualitas pada akhirnya ditentukan oleh kemampuan perusahaan memenuhi kebutuhan dan ekspektasi pelanggan. Customer focus bukan hanya berarti meningkatkan kepuasan pelanggan, tetapi memahami apa yang benar-benar dianggap bernilai oleh pelanggan. Perusahaan perlu memahami:",
      },
      {
        type: "list",
        items: [
          "Apa kebutuhan pelanggan?",
          "Apa yang dianggap penting?",
          "Apa yang menyebabkan customer complaint?",
          "Apa yang menyebabkan pelanggan berpindah ke kompetitor?",
          "Seberapa konsisten perusahaan memenuhi kebutuhan tersebut?",
        ],
      },
      {
        type: "paragraph",
        text: "Karena itu, voice of customer perlu diterjemahkan menjadi persyaratan proses dan indikator kinerja. Contohnya:",
      },
      {
        type: "quote",
        text: "Customer Requirement → Critical to Quality (CTQ) → Process Requirement → KPI",
      },
      {
        type: "paragraph",
        text: "Dengan pendekatan ini, perusahaan dapat menghubungkan kebutuhan pelanggan dengan aktivitas operasional.",
      },

      { type: "heading", text: "2. Leadership Commitment" },
      {
        type: "paragraph",
        text: "TQM tidak akan berjalan jika hanya menjadi program departemen Quality. Manajemen puncak harus menunjukkan komitmen terhadap kualitas melalui:",
      },
      {
        type: "list",
        items: [
          "Quality objectives",
          "Resource allocation",
          "Performance monitoring",
          "Problem-solving",
          "Employee development",
          "Continuous improvement",
        ],
      },
      {
        type: "paragraph",
        text: "Leadership juga harus memastikan bahwa target kualitas tidak bertentangan dengan target produktivitas, biaya, atau kecepatan.",
      },
      {
        type: "paragraph",
        text: "Penelitian Sutrisno dan Ardyan (2020) menunjukkan bahwa leadership dan continuous improvement merupakan dimensi penting dalam praktik TQM yang berhubungan dengan organizational performance pada perusahaan makanan. Temuan ini memperkuat gagasan bahwa TQM tidak cukup dibangun melalui prosedur teknis. Peran leadership diperlukan untuk memastikan kualitas menjadi bagian dari sistem manajemen organisasi.",
      },

      { type: "heading", text: "3. Employee Involvement" },
      {
        type: "paragraph",
        text: "Karyawan adalah pihak yang paling dekat dengan proses operasional. Karena itu, mereka sering menjadi pihak pertama yang mengetahui:",
      },
      {
        type: "list",
        items: [
          "Adanya process deviation",
          "Bottleneck",
          "Waste",
          "Defect",
          "Customer complaint",
          "Maupun potensi improvement",
        ],
      },
      {
        type: "paragraph",
        text: "Dalam TQM, karyawan tidak hanya diposisikan sebagai pelaksana instruksi, tetapi juga sebagai problem solver dan improvement agent. Implementasinya dapat dilakukan melalui:",
      },
      {
        type: "list",
        items: [
          "Quality Circle",
          "Suggestion system",
          "Kaizen",
          "Cross-functional improvement team",
          "Problem-solving team",
          "Employee empowerment",
        ],
      },
      {
        type: "paragraph",
        text: "Konsep ini menjadi semakin penting dalam pendekatan soft TQM, yang menekankan aspek manusia, leadership, employee involvement, organizational culture, dan customer orientation.",
      },

      { type: "heading", text: "4. Process Approach" },
      {
        type: "paragraph",
        text: "TQM memandang organisasi sebagai kumpulan proses yang saling terhubung. Misalnya dalam perusahaan manufaktur:",
      },
      {
        type: "quote",
        text: "Supplier → Procurement → Warehouse → Production → Quality → Delivery → Customer",
      },
      {
        type: "paragraph",
        text: "Masalah kualitas pada satu proses dapat menghasilkan masalah pada proses berikutnya. Oleh karena itu, perusahaan tidak cukup hanya mengukur output. Perusahaan perlu memahami hubungan:",
      },
      {
        type: "quote",
        text: "Input → Process → Output → Customer Value",
      },
      {
        type: "paragraph",
        text: "Pendekatan ini membantu perusahaan berpindah dari inspection-based quality menuju process-based quality management.",
      },

      { type: "heading", text: "5. Continuous Improvement" },
      {
        type: "paragraph",
        text: "Kualitas tidak dapat dianggap sebagai kondisi yang sudah selesai. Perusahaan harus terus mencari peluang untuk:",
      },
      {
        type: "list",
        items: [
          "Mengurangi defect",
          "Mengurangi waste",
          "Mempercepat proses",
          "Meningkatkan reliability",
          "Mengurangi cost",
          "Meningkatkan customer experience",
        ],
      },
      {
        type: "paragraph",
        text: "Salah satu pendekatan yang banyak digunakan adalah PDCA (Plan-Do-Check-Act).",
      },
      {
        type: "list",
        items: [
          "Plan → Identifikasi masalah dan tentukan rencana perbaikan.",
          "Do → Implementasikan solusi dalam skala yang terkendali.",
          "Check → Evaluasi hasil menggunakan data.",
          "Act → Jika efektif, standarkan dan kembangkan perbaikan tersebut.",
        ],
      },
      {
        type: "paragraph",
        text: "Siklus tersebut kemudian diulang kembali untuk menemukan peluang improvement berikutnya. Continuous improvement bukan sekadar aktivitas tambahan. Dalam penelitian Sutrisno dan Ardyan (2020), continuous improvement menjadi salah satu dimensi TQM yang berperan penting dalam pencapaian organizational performance.",
      },

      { type: "heading", text: "6. Data-Driven Decision Making" },
      {
        type: "paragraph",
        text: "TQM membutuhkan keputusan berdasarkan fakta dan data, bukan hanya intuisi. Perusahaan perlu menggunakan data seperti:",
      },
      {
        type: "list",
        items: [
          "Defect rate",
          "Customer complaint",
          "On-time delivery",
          "Rework",
          "Scrap",
          "Process cycle time",
          "Supplier performance",
          "Cost of poor quality",
          "Customer satisfaction",
        ],
      },
      {
        type: "paragraph",
        text: "Contohnya, jika tingkat defect meningkat dari 2% menjadi 5%, perusahaan perlu mencari tahu apa yang berubah → bukan langsung menyimpulkan bahwa operator melakukan kesalahan. Analisis perlu dilakukan terhadap:",
      },
      {
        type: "list",
        items: ["Machine", "Method", "Material", "Man", "Measurement", "Environment"],
      },
      {
        type: "paragraph",
        text: "Pendekatan berbasis data membantu organisasi menemukan root cause, bukan hanya mengatasi gejala.",
      },

      { type: "heading", text: "Tujuan Total Quality Management" },
      {
        type: "paragraph",
        text: "Secara umum, penerapan TQM bertujuan membangun sistem organisasi yang mampu menghasilkan kualitas secara konsisten. Beberapa tujuan utama TQM antara lain:",
      },
      {
        type: "list",
        items: [
          "Meningkatkan Kepuasan Pelanggan → memastikan produk dan layanan memenuhi atau bahkan melampaui ekspektasi pelanggan",
          "Mengurangi Defect → defect, rework, scrap, return, complaint, dan failure",
          "Meningkatkan Efisiensi Operasional → mengurangi aktivitas yang tidak memberikan value",
          "Meningkatkan Keterlibatan Karyawan → mendorong partisipasi dalam problem solving dan continuous improvement",
          "Membangun Budaya Perbaikan Berkelanjutan → TQM bukan proyek satu kali",
        ],
      },
      {
        type: "quote",
        text: "Today better than yesterday, tomorrow better than today.",
      },

      { type: "heading", text: "Manfaat Penerapan TQM" },
      {
        type: "paragraph",
        text: "Implementasi TQM dapat memberikan manfaat pada beberapa level organisasi:",
      },
      {
        type: "table",
        headers: ["Area", "Potensi Manfaat"],
        rows: [
          ["Customer", "Customer satisfaction meningkat"],
          ["Quality", "Defect dan complaint menurun"],
          ["Cost", "Cost of Poor Quality menurun"],
          ["Productivity", "Produktivitas meningkat"],
          ["Process", "Variasi dan ketidakefisienan berkurang"],
          ["Employee", "Engagement dan ownership meningkat"],
          ["Supplier", "Supplier quality meningkat"],
          ["Management", "Decision making lebih berbasis data"],
          ["Organization", "Continuous improvement menjadi budaya"],
        ],
      },
      {
        type: "paragraph",
        text: "Yang penting untuk dipahami, TQM tidak hanya menghasilkan peningkatan kualitas produk. Jika diterapkan dengan benar, TQM dapat berdampak pada:",
      },
      {
        type: "quote",
        text: "Quality → Cost → Delivery → Productivity → Customer Satisfaction → Business Performance",
      },
      {
        type: "paragraph",
        text: "Hubungan antara TQM dan performance juga terlihat pada penelitian di berbagai konteks bisnis. Dalam konteks startup, misalnya, Utami et al. (2021) meneliti bagaimana aspek soft TQM berkaitan dengan business performance. Hal ini menunjukkan bahwa kualitas tidak hanya dibangun melalui sistem dan prosedur, tetapi juga melalui faktor manusia dan organisasi.",
      },

      { type: "heading", text: "Contoh Penerapan TQM di Perusahaan" },
      {
        type: "paragraph",
        text: "Misalnya sebuah perusahaan manufaktur mengalami peningkatan customer complaint akibat produk yang tidak sesuai spesifikasi. Pendekatan tradisional mungkin hanya melakukan inspeksi tambahan terhadap produk. Namun pendekatan TQM akan melihat masalah secara lebih sistematis.",
      },
      {
        type: "list",
        items: [
          "Tahap 1 → Identify Customer Requirement: mengidentifikasi jenis ketidaksesuaian yang paling memengaruhi pelanggan",
          "Tahap 2 → Measure: mengukur defect rate, defect type, process capability, rework, scrap, dan complaint rate",
          "Tahap 3 → Analyze: root cause analysis menggunakan Pareto Analysis, Fishbone Diagram, 5 Why, Process Mapping",
          "Tahap 4 → Improve: revisi Standard Operating Procedure, redesign process, training operator, preventive maintenance, supplier improvement, atau perubahan inspection point",
          "Tahap 5 → Control: menetapkan standard baru, KPI, control chart, audit, monitoring, dan review berkala",
        ],
      },
      {
        type: "paragraph",
        text: "Dengan demikian, perusahaan tidak hanya memperbaiki produk yang sudah rusak, tetapi memperbaiki sistem yang menyebabkan defect tersebut muncul.",
      },

      { type: "heading", text: "Contoh KPI untuk Mengukur Keberhasilan TQM" },
      {
        type: "paragraph",
        text: "TQM membutuhkan indikator yang jelas agar perusahaan dapat mengetahui apakah kualitas benar-benar membaik. Beberapa KPI yang dapat digunakan antara lain:",
      },
      { type: "heading", text: "1. Defect Rate" },
      {
        type: "quote",
        text: "Defect Rate = Jumlah Produk Defect / Total Produksi × 100%",
      },
      {
        type: "paragraph",
        text: "Semakin rendah defect rate, semakin baik kualitas proses.",
      },
      { type: "heading", text: "2. First Pass Yield (FPY)" },
      {
        type: "quote",
        text: "FPY = Produk yang Lulus Tanpa Rework / Total Produk × 100%",
      },
      {
        type: "paragraph",
        text: "KPI ini menunjukkan kemampuan proses menghasilkan produk yang benar sejak pertama kali.",
      },
      { type: "heading", text: "3. Customer Complaint Rate" },
      {
        type: "quote",
        text: "Complaint Rate = Jumlah Complaint / Total Transaksi atau Delivery × 100%",
      },
      {
        type: "paragraph",
        text: "KPI ini membantu perusahaan melihat kualitas dari perspektif pelanggan.",
      },
      { type: "heading", text: "4. On-Time Delivery" },
      {
        type: "quote",
        text: "OTD = Jumlah Delivery Tepat Waktu / Total Delivery × 100%",
      },
      {
        type: "paragraph",
        text: "Kualitas tidak hanya berkaitan dengan spesifikasi produk. Produk yang benar tetapi terlambat juga dapat dianggap gagal memenuhi kebutuhan pelanggan.",
      },
      { type: "heading", text: "5. Cost of Poor Quality" },
      {
        type: "quote",
        text: "COPQ = Internal Failure Cost + External Failure Cost + Appraisal Cost + Prevention Cost",
      },
      {
        type: "paragraph",
        text: "COPQ membantu perusahaan melihat kualitas dari perspektif finansial.",
      },

      { type: "heading", text: "Soft TQM dan Hard TQM: Apa Bedanya?" },
      {
        type: "paragraph",
        text: "Salah satu cara yang bermanfaat untuk memahami TQM adalah membedakannya menjadi soft TQM dan hard TQM.",
      },
      { type: "heading", text: "Soft TQM" },
      {
        type: "paragraph",
        text: "Berfokus pada aspek manusia dan organisasi, seperti:",
      },
      {
        type: "list",
        items: [
          "Leadership",
          "Employee involvement",
          "Customer focus",
          "Organizational culture",
          "Teamwork",
          "Communication",
          "Continuous improvement",
        ],
      },
      { type: "heading", text: "Hard TQM" },
      {
        type: "paragraph",
        text: "Berfokus pada aspek teknis dan sistem, seperti:",
      },
      {
        type: "list",
        items: [
          "Quality tools",
          "Process management",
          "Measurement",
          "Statistical quality control",
          "Quality information",
          "Standardization",
        ],
      },
      {
        type: "paragraph",
        text: "Keduanya tidak seharusnya dipisahkan. Penelitian Sutrisno (2019) menunjukkan bahwa aspek soft dan hard TQM sama-sama berkaitan dengan operational performance. Namun, penelitian tersebut juga menunjukkan pentingnya organizational culture dalam mencapai sustainable competitive advantage pada UKM produksi makanan.",
      },
      {
        type: "quote",
        text: "Tools tanpa culture sulit bertahan. Culture tanpa system sulit diukur.",
      },
      {
        type: "paragraph",
        text: "Karena itu, penerapan TQM perlu mengintegrasikan keduanya.",
      },

      { type: "heading", text: "TQM dan Organizational Culture" },
      {
        type: "paragraph",
        text: "TQM pada akhirnya bukan hanya persoalan metode, tetapi juga organizational culture. Budaya organisasi yang mendukung TQM ditandai oleh perilaku seperti:",
      },
      {
        type: "list",
        items: [
          "Terbuka terhadap masalah",
          "Menggunakan data dalam pengambilan keputusan",
          "Berani mengungkapkan process deviation",
          "Terbiasa melakukan root cause analysis",
          "Menerima feedback",
          "Melibatkan karyawan dalam improvement",
          "Tidak berhenti pada corrective action",
        ],
      },
      {
        type: "paragraph",
        text: "Penelitian Tanjoyo et al. (2021) menunjukkan adanya hubungan antara TQM, organizational culture, operational performance, dan corporate performance. Studi tersebut juga membedakan kontribusi soft TQM dan hard TQM dalam menjelaskan performance.",
      },
      {
        type: "paragraph",
        text: "Hal ini menunjukkan bahwa implementasi TQM perlu dipandang sebagai organizational transformation, bukan hanya penerapan tools kualitas.",
      },

      { type: "heading", text: "TQM, Lean, dan Six Sigma: Apakah Sama?" },
      {
        type: "paragraph",
        text: "TQM, Lean, dan Six Sigma sering digunakan secara bersamaan, tetapi ketiganya memiliki penekanan yang berbeda.",
      },
      {
        type: "table",
        headers: ["Aspek", "TQM", "Lean", "Six Sigma"],
        rows: [
          ["Fokus utama", "Quality culture", "Waste & flow", "Variation & defect"],
          ["Orientasi", "Organisasi", "Process", "Data & process"],
          ["Pendekatan", "Management philosophy", "Operational improvement", "Structured problem solving"],
          ["Contoh tools", "PDCA, Quality Circle", "VSM, 5S, Kanban", "DMAIC, SPC, DOE"],
          ["Pelaku", "Seluruh organisasi", "Seluruh proses", "Improvement team"],
          ["Tujuan", "Quality & customer value", "Flow & efficiency", "Process capability"],
        ],
      },
      {
        type: "paragraph",
        text: "Namun, perusahaan tidak harus memilih salah satu. Dalam praktik Operational Excellence, ketiganya dapat saling melengkapi:",
      },
      {
        type: "list",
        items: [
          "TQM → membangun budaya dan sistem kualitas",
          "Lean → meningkatkan flow dan mengurangi waste",
          "Six Sigma → mengurangi variasi dan defect",
        ],
      },
      {
        type: "paragraph",
        text: "Ketiganya dapat diarahkan pada tujuan yang sama: meningkatkan customer value dan business performance melalui continuous improvement.",
      },

      { type: "heading", text: "Tantangan Implementasi TQM" },
      {
        type: "paragraph",
        text: "Walaupun konsep TQM terlihat sederhana, implementasinya tidak selalu mudah. Beberapa tantangan yang sering muncul antara lain:",
      },
      { type: "heading", text: "1. TQM Dianggap Sebagai Tanggung Jawab Departemen Quality" },
      {
        type: "paragraph",
        text: "Jika hanya Quality Department yang menjalankan TQM, perubahan organisasi akan sulit terjadi.",
      },
      { type: "heading", text: "2. Fokus Terlalu Besar pada KPI" },
      {
        type: "paragraph",
        text: "KPI memang penting, tetapi target KPI tanpa perubahan proses dapat menyebabkan organisasi hanya mengejar angka.",
      },
      { type: "heading", text: "3. Kurangnya Leadership Commitment" },
      {
        type: "paragraph",
        text: "Tanpa dukungan manajemen, improvement sering berhenti ketika menghadapi konflik dengan target biaya atau produktivitas.",
      },
      { type: "heading", text: "4. Karyawan Tidak Dilibatkan" },
      {
        type: "paragraph",
        text: "Improvement yang dibuat tanpa melibatkan orang yang menjalankan proses berisiko tidak sustainable.",
      },
      { type: "heading", text: "5. Tidak Ada Standardisasi" },
      {
        type: "paragraph",
        text: "Perbaikan yang berhasil harus diterjemahkan menjadi:",
      },
      {
        type: "quote",
        text: "Improvement → Standard → Monitoring → Audit → Continuous Improvement",
      },
      {
        type: "paragraph",
        text: "Jika tidak, masalah yang sama dapat kembali muncul.",
      },

      { type: "heading", text: "Bagaimana Memulai Implementasi TQM?" },
      {
        type: "paragraph",
        text: "Perusahaan yang baru ingin menerapkan TQM tidak perlu langsung membuat program yang kompleks. Pendekatan praktis dapat dimulai dengan tujuh langkah:",
      },
      {
        type: "list",
        items: [
          "Assess Current Condition → identifikasi kondisi kualitas dan proses saat ini",
          "Identify Customer Critical Requirements → tentukan aspek yang paling penting bagi pelanggan",
          "Map Critical Processes → identifikasi proses yang paling memengaruhi customer value",
          "Establish Quality KPI → tentukan indikator untuk mengukur kualitas dan performa proses",
          "Identify Root Causes → gunakan data untuk menemukan akar masalah",
          "Implement Improvement → lakukan improvement melalui PDCA, Kaizen, Lean, Six Sigma, atau metode problem solving yang sesuai",
          "Standardize & Sustain → pastikan improvement menjadi bagian dari standard work dan management system",
        ],
      },

      { type: "heading", text: "Kesimpulan" },
      {
        type: "paragraph",
        text: "Total Quality Management (TQM) bukan sekadar sistem pengendalian kualitas atau aktivitas inspeksi produk. TQM merupakan pendekatan manajemen yang mengintegrasikan customer focus, leadership, employee involvement, process management, data-driven decision making, dan continuous improvement ke dalam seluruh aktivitas organisasi. Penelitian terkait TQM di Indonesia menunjukkan bahwa penerapan TQM memiliki hubungan dengan operational performance, organizational performance, business performance, leadership, continuous improvement, dan organizational culture (Sutrisno, 2019; Sutrisno & Ardyan, 2020; Sutrisno et al., 2019; Tanjoyo et al., 2021; Utami et al., 2021).",
      },
      {
        type: "paragraph",
        text: "Keberhasilan TQM tidak hanya dapat dilihat dari penurunan defect. Dampaknya harus dapat terlihat pada keseluruhan sistem bisnis, mulai dari:",
      },
      {
        type: "quote",
        text: "Customer Satisfaction → Quality → Cost → Delivery → Productivity → Business Performance",
      },
      {
        type: "paragraph",
        text: "Karena itu, perusahaan yang ingin menerapkan TQM perlu menghindari pendekatan yang hanya berfokus pada inspeksi dan corrective action. Fokus harus bergeser menuju pembangunan proses yang stabil, keterlibatan karyawan, pengambilan keputusan berbasis data, serta budaya continuous improvement.",
      },
      {
        type: "paragraph",
        text: 'Pada akhirnya, tujuan TQM bukan sekadar "membuat produk yang berkualitas", tetapi membangun organisasi yang mampu menghasilkan kualitas secara konsisten dan terus menjadi lebih baik.',
      },

      { type: "heading", text: "Ingin Menerapkan TQM di Perusahaan?" },
      {
        type: "paragraph",
        text: "Penerapan TQM membutuhkan lebih dari sekadar pemahaman konsep. Perusahaan perlu menerjemahkan prinsip TQM menjadi quality strategy, process improvement, KPI, problem-solving system, dan continuous improvement culture.",
      },
      {
        type: "paragraph",
        text: "Jika organisasi Anda sedang membangun Total Quality Management, Lean Management, Continuous Improvement, atau Operational Excellence, assessment kondisi saat ini dapat menjadi langkah awal untuk mengetahui gap antara kondisi aktual dengan kondisi yang diharapkan.",
      },
      {
        type: "paragraph",
        text: "Mulailah dari satu pertanyaan sederhana:",
      },
      {
        type: "quote",
        text: "Apakah masalah kualitas di perusahaan Anda benar-benar berasal dari orangnya, atau justru dari sistem dan proses yang mereka jalankan?",
      },

      { type: "heading", text: "Referensi" },
      {
        type: "list",
        items: [
          "Sutrisno, T. F. C. W. (2019). Relationship between total quality management element, operational performance and organizational performance in food production SMEs. Jurnal Aplikasi Manajemen, 17(2), 285–294. https://doi.org/10.21776/ub.jam.2019.017.02.11",
          "Sutrisno, T. F., Effendy, J. A., & Prathivi, M. D. G. (2019). Hybrid strategy study: The role of entrepreneurial orientation and total quality management in MSMEs. Jurnal Manajemen dan Kewirausahaan, 7(2), 124–131. https://doi.org/10.26905/jmdk.v7i2.3057",
          "Sutrisno, T. F., & Ardyan, E. (2020). Achieving organizational performance in food companies: The critical role of leadership and continuous improvement as part of TQM practice. Quality-Access to Success, 21(177), 133–138.",
          "Tanjoyo, C., Harianto, E., & Sutrisno, T. F. C. W. (2021). The role of TQM and organizational culture on operational performance. Jurnal Aplikasi Manajemen, 19(4), 938–948. https://doi.org/10.21776/ub.jam.2021.019.04.20",
          "Utami, C. W., Sutrisno, T. F. C. W., Teofilus, & Ardyan, E. (2021). Can start-up businesses achieve business performance? An overview of the \"soft\" total quality management concept. Quality-Access to Success, 22(181), 105–109.",
        ],
      },
    ],
  },
  {
    slug: "inventory-management-safety-stock-rop-eoq",
    image: "/article/article2.jpg",
    category: "SUPPLY CHAIN",
    date: "Agustus 2026",
    readTime: "14 min read",
    title: "Inventory Management: Cara Menentukan Safety Stock, Reorder Point, dan EOQ",
    excerpt:
      "Inventory management merupakan salah satu aspek penting dalam supply chain management. Persediaan yang terlalu tinggi dapat mengikat modal kerja dan meningkatkan biaya penyimpanan, sedangkan persediaan yang terlalu rendah dapat menyebabkan stockout, keterlambatan pengiriman, hingga kehilangan penjualan.",
    author: "LeanCore Consulting",
    authorRole: "Supply Chain Planning Practice",
    body: [
      {
        type: "paragraph",
        text: "Karena itu, perusahaan perlu memiliki kebijakan inventory yang mampu menjawab tiga pertanyaan utama:",
      },
      {
        type: "list",
        items: [
          "Berapa banyak persediaan yang perlu disimpan?",
          "Kapan perusahaan harus melakukan pemesanan kembali?",
          "Berapa jumlah yang ideal untuk dipesan setiap kali melakukan order?",
        ],
      },
      {
        type: "paragraph",
        text: "Tiga konsep dasar yang dapat digunakan untuk menjawab pertanyaan tersebut adalah Safety Stock, Reorder Point (ROP), dan Economic Order Quantity (EOQ).",
      },

      { type: "heading", text: "Apa Itu Inventory Management?" },
      {
        type: "paragraph",
        text: "Inventory management adalah proses merencanakan, mengendalikan, dan mengoptimalkan persediaan agar perusahaan mampu memenuhi kebutuhan pelanggan dengan tingkat inventory dan biaya yang optimal.",
      },
      {
        type: "paragraph",
        text: "Tujuan inventory management bukan sekadar menjaga agar barang selalu tersedia. Perusahaan perlu menemukan keseimbangan antara:",
      },
      {
        type: "quote",
        text: "Service Level – Inventory Level – Inventory Cost – Cash Flow",
      },
      {
        type: "paragraph",
        text: "Persediaan yang terlalu tinggi dapat menyebabkan:",
      },
      {
        type: "list",
        items: [
          "Meningkatnya biaya penyimpanan",
          "Modal kerja tertahan",
          "Meningkatnya risiko slow-moving inventory",
          "Barang rusak atau obsolete",
          "Kebutuhan ruang gudang yang lebih besar",
        ],
      },
      {
        type: "paragraph",
        text: "Sebaliknya, persediaan yang terlalu rendah dapat menyebabkan:",
      },
      {
        type: "list",
        items: [
          "Stockout",
          "Lost sales",
          "Production stoppage",
          "Emergency purchasing",
          "Biaya transportasi yang lebih tinggi",
          "Menurunnya customer service level",
        ],
      },
      {
        type: "paragraph",
        text: "Karena itu, inventory optimization bukan berarti memiliki inventory sesedikit mungkin, tetapi memiliki inventory pada tingkat yang tepat untuk memenuhi kebutuhan bisnis dan tingkat risiko yang dapat diterima.",
      },

      { type: "heading", text: "1. Apa Itu Safety Stock?" },
      {
        type: "paragraph",
        text: "Safety stock adalah persediaan tambahan yang disiapkan perusahaan untuk menghadapi ketidakpastian permintaan maupun ketidakpastian supply.",
      },
      {
        type: "paragraph",
        text: "Dalam kondisi ideal, perusahaan mungkin mengetahui bahwa demand adalah 100 unit per hari dan supplier selalu mengirimkan barang dalam waktu 5 hari. Namun dalam kondisi nyata, demand dapat meningkat menjadi 120 unit per hari. Pada saat yang sama, supplier yang biasanya membutuhkan 5 hari mungkin membutuhkan 7 atau 8 hari. Situasi tersebut menciptakan risiko stockout.",
      },
      {
        type: "paragraph",
        text: "Safety stock berfungsi sebagai buffer untuk menghadapi:",
      },
      {
        type: "list",
        items: [
          "Demand variability",
          "Lead time variability",
          "Supplier delay",
          "Forecast error",
          "Seasonal demand",
          "Unexpected increase in demand",
        ],
      },
      {
        type: "quote",
        text: "Safety Stock = buffer untuk menghadapi ketidakpastian supply dan demand.",
      },
      { type: "heading", text: "Cara Menghitung Safety Stock" },
      {
        type: "paragraph",
        text: "Salah satu pendekatan yang umum digunakan ketika variabilitas demand menjadi perhatian utama adalah:",
      },
      {
        type: "quote",
        text: "Safety Stock = Z × σd × √LT",
      },
      {
        type: "paragraph",
        text: "Keterangan: SS = Safety Stock, Z = service level factor, σd = standar deviasi demand per periode, LT = lead time.",
      },
      { type: "heading", text: "Contoh Perhitungan" },
      {
        type: "paragraph",
        text: "Sebuah perusahaan memiliki data: rata-rata demand = 100 unit/hari; standar deviasi demand = 20 unit/hari; lead time = 5 hari; target service level = 95%; Z = 1,645.",
      },
      {
        type: "quote",
        text: "SS = 1,645 × 20 × √5",
      },
      {
        type: "paragraph",
        text: "Hasilnya sekitar: Safety Stock = 74 unit. Artinya, perusahaan dapat menyediakan sekitar 74 unit sebagai buffer inventory untuk mengurangi risiko stockout akibat variasi demand.",
      },
      {
        type: "paragraph",
        text: "Catatan: Formula safety stock harus disesuaikan dengan karakteristik demand dan lead time. Jika demand dan lead time sama-sama memiliki variability, pendekatan perhitungannya akan berbeda.",
      },

      { type: "heading", text: "2. Apa Itu Reorder Point (ROP)?" },
      {
        type: "paragraph",
        text: "Reorder Point (ROP) adalah titik persediaan ketika perusahaan harus melakukan pemesanan kembali agar barang baru tiba sebelum inventory mengalami stockout.",
      },
      {
        type: "quote",
        text: "ROP menjawab pertanyaan: \"Kapan perusahaan harus melakukan order?\"",
      },
      {
        type: "paragraph",
        text: "Formula dasar ROP adalah:",
      },
      {
        type: "quote",
        text: "ROP = Demand selama Lead Time + Safety Stock, atau ROP = (Average Daily Demand × Lead Time) + Safety Stock",
      },
      { type: "heading", text: "Contoh Perhitungan ROP" },
      {
        type: "paragraph",
        text: "Misalnya: demand = 100 unit/hari; lead time = 5 hari; safety stock = 74 unit.",
      },
      {
        type: "quote",
        text: "ROP = (100 × 5) + 74 = 574 unit",
      },
      {
        type: "paragraph",
        text: "Artinya, ketika inventory turun hingga sekitar 574 unit, perusahaan perlu melakukan replenishment.",
      },
      { type: "heading", text: "Bagaimana ROP Bekerja?" },
      {
        type: "paragraph",
        text: "Misalkan perusahaan memiliki persediaan 1.000 unit. Demand terus terjadi sehingga inventory turun: 1.000 → 800 → 650 → 574. Ketika inventory mencapai 574 unit, perusahaan melakukan order.",
      },
      {
        type: "paragraph",
        text: "Perusahaan tidak perlu menunggu inventory menjadi nol. Justru, ROP dirancang agar perusahaan melakukan replenishment ketika masih tersedia inventory yang cukup untuk memenuhi kebutuhan selama supplier memproses dan mengirimkan pesanan.",
      },

      { type: "heading", text: "3. Apa Itu Economic Order Quantity (EOQ)?" },
      {
        type: "paragraph",
        text: "Jika ROP menjawab pertanyaan \"kapan harus order?\", maka Economic Order Quantity (EOQ) menjawab \"berapa banyak yang sebaiknya dipesan setiap kali melakukan order?\"",
      },
      {
        type: "paragraph",
        text: "EOQ digunakan untuk menentukan jumlah pemesanan yang secara teoritis dapat menyeimbangkan ordering cost dan holding cost.",
      },
      {
        type: "quote",
        text: "EOQ = √(2DS/H)",
      },
      {
        type: "paragraph",
        text: "Keterangan: D = annual demand; S = ordering cost per order; H = holding cost per unit per tahun.",
      },
      { type: "heading", text: "Contoh Perhitungan EOQ" },
      {
        type: "paragraph",
        text: "Misalkan perusahaan memiliki: annual demand = 12.000 unit; ordering cost = Rp100.000/order; holding cost = Rp5.000/unit/tahun.",
      },
      {
        type: "quote",
        text: "EOQ = √[(2 × 12.000 × Rp100.000) / Rp5.000] ≈ 693 unit",
      },
      {
        type: "paragraph",
        text: "Artinya, berdasarkan asumsi model tersebut, jumlah pemesanan yang optimal secara teoritis adalah sekitar 693 unit setiap kali melakukan order.",
      },
      {
        type: "paragraph",
        text: "Namun, EOQ tidak selalu berarti perusahaan harus selalu membeli tepat 693 unit. Dalam kondisi nyata, perusahaan juga perlu mempertimbangkan:",
      },
      {
        type: "list",
        items: [
          "Minimum Order Quantity (MOQ)",
          "Kapasitas supplier",
          "Kapasitas gudang",
          "Pallet configuration",
          "Truck utilization",
          "Quantity discount",
          "Shelf life",
          "Cash flow",
          "Purchasing policy",
        ],
      },
      {
        type: "paragraph",
        text: "Karena itu, EOQ sebaiknya digunakan sebagai decision support, bukan sebagai angka absolut yang diterapkan tanpa mempertimbangkan kondisi operasional.",
      },

      { type: "heading", text: "4. Perbedaan Safety Stock, ROP, dan EOQ" },
      {
        type: "paragraph",
        text: "Ketiga konsep ini sering dianggap sama, padahal memiliki fungsi yang berbeda.",
      },
      {
        type: "table",
        headers: ["Konsep", "Pertanyaan Utama", "Fungsi"],
        rows: [
          ["Safety Stock", "Berapa buffer yang diperlukan?", "Menghadapi ketidakpastian"],
          ["Reorder Point", "Kapan harus melakukan order?", "Menentukan titik replenishment"],
          ["EOQ", "Berapa jumlah yang harus dipesan?", "Menentukan order quantity optimal"],
        ],
      },
      {
        type: "paragraph",
        text: "Dengan kata lain: Safety Stock → Buffer, ROP → Timing, EOQ → Quantity. Ketiganya dapat digunakan secara bersama-sama untuk membangun inventory policy yang lebih terstruktur.",
      },

      { type: "heading", text: "5. Bagaimana Safety Stock, ROP, dan EOQ Bekerja Bersama?" },
      {
        type: "paragraph",
        text: "Misalkan perusahaan memiliki: Safety Stock = 74 unit; ROP = 574 unit; EOQ = 693 unit.",
      },
      {
        type: "paragraph",
        text: "Ketika inventory masih tinggi, perusahaan belum perlu melakukan pemesanan. Ketika inventory turun hingga 574 unit, perusahaan melakukan order sejumlah 693 unit. Sementara 74 unit berfungsi sebagai buffer untuk menghadapi ketidakpastian selama proses replenishment.",
      },
      {
        type: "quote",
        text: "Inventory tinggi → Demand terjadi → Inventory turun → Inventory mencapai ROP → Place Order = EOQ → Supplier Lead Time → Replenishment tiba → Inventory kembali meningkat → Siklus berulang",
      },
      {
        type: "paragraph",
        text: "Dengan demikian, perusahaan memiliki mekanisme untuk menentukan kapan harus order dan berapa jumlah yang harus dipesan.",
      },

      { type: "heading", text: "6. Kesalahan Umum dalam Inventory Management" },
      {
        type: "paragraph",
        text: "Menggunakan formula inventory tidak otomatis membuat inventory management menjadi optimal. Dalam praktiknya, terdapat beberapa kesalahan yang cukup sering terjadi.",
      },
      { type: "heading", text: "1. Hanya Menggunakan Average Demand" },
      {
        type: "paragraph",
        text: "Average demand tidak memberikan gambaran mengenai variability. Dua produk dapat memiliki demand rata-rata yang sama tetapi memiliki tingkat fluktuasi yang sangat berbeda. Karena itu, perusahaan perlu melihat Average Demand dan Demand Variability sekaligus.",
      },
      { type: "heading", text: "2. Menentukan Safety Stock Berdasarkan \"Feeling\"" },
      {
        type: "paragraph",
        text: "Contoh: \"Biasanya kita simpan stok dua minggu.\" Pertanyaan berikutnya adalah, mengapa dua minggu? Safety stock sebaiknya ditentukan berdasarkan faktor yang dapat diukur, seperti demand variability, lead time, service level, supplier reliability, dan forecast accuracy.",
      },
      { type: "heading", text: "3. Menggunakan Contractual Lead Time" },
      {
        type: "paragraph",
        text: "Supplier mungkin memiliki contractual lead time 5 hari. Namun, ketika data aktual dianalisis, ternyata actual lead time berkisar 4–9 hari. Jika perusahaan hanya menggunakan angka 5 hari, risiko stockout dapat ter-underestimate. Karena itu, inventory planning sebaiknya menggunakan actual lead time performance, bukan hanya angka yang tercantum dalam kontrak.",
      },
      { type: "heading", text: "4. Menganggap EOQ sebagai Angka Absolut" },
      {
        type: "paragraph",
        text: "EOQ merupakan model yang dibangun berdasarkan asumsi tertentu. Dalam kondisi nyata, perusahaan juga harus memperhatikan EOQ bersama MOQ, supplier capacity, storage capacity, cash flow, dan purchasing constraint. Oleh karena itu, hasil EOQ perlu divalidasi sebelum dijadikan kebijakan pembelian.",
      },
      { type: "heading", text: "5. Hanya Melihat Nilai Inventory" },
      {
        type: "paragraph",
        text: "Inventory senilai Rp10 miliar tidak otomatis berarti inventory tersebut terlalu tinggi. Perusahaan juga perlu melihat inventory turnover, days inventory, stockout rate, service level, inventory aging, slow-moving inventory, obsolete inventory, dan forecast accuracy.",
      },

      { type: "heading", text: "7. KPI yang Perlu Dipantau dalam Inventory Management" },
      {
        type: "paragraph",
        text: "Inventory management yang baik membutuhkan pengukuran kinerja secara berkala. Beberapa KPI yang dapat digunakan adalah:",
      },
      { type: "heading", text: "Inventory Turnover" },
      {
        type: "quote",
        text: "Inventory Turnover = COGS / Average Inventory",
      },
      {
        type: "paragraph",
        text: "KPI ini menunjukkan seberapa sering inventory berputar selama periode tertentu. Semakin tinggi turnover tidak selalu berarti semakin baik. Turnover yang terlalu tinggi dapat menunjukkan inventory terlalu rendah dan berpotensi meningkatkan stockout.",
      },
      { type: "heading", text: "Days Inventory" },
      {
        type: "quote",
        text: "Days Inventory = (Average Inventory / COGS) × 365",
      },
      {
        type: "paragraph",
        text: "Indikator ini menunjukkan berapa hari rata-rata modal perusahaan tertahan dalam inventory.",
      },
      { type: "heading", text: "Stockout Rate" },
      {
        type: "paragraph",
        text: "Mengukur frekuensi atau proporsi kejadian ketika barang tidak tersedia ketika dibutuhkan. Stockout yang tinggi dapat menunjukkan adanya masalah pada forecasting, inventory policy, supplier performance, replenishment, atau demand planning.",
      },
      { type: "heading", text: "Inventory Accuracy" },
      {
        type: "paragraph",
        text: "Mengukur kesesuaian antara physical inventory dan system inventory. Inventory policy yang baik akan sulit diterapkan jika data inventory tidak akurat.",
      },
      { type: "heading", text: "Service Level" },
      {
        type: "paragraph",
        text: "Service level menunjukkan kemampuan perusahaan memenuhi kebutuhan pelanggan tanpa mengalami stockout. Karena itu, inventory management sebaiknya tidak hanya mengejar minimum inventory, tetapi juga mempertimbangkan target service level.",
      },

      { type: "heading", text: "8. Inventory Management Bukan Sekadar Mengurangi Stok" },
      {
        type: "paragraph",
        text: "Salah satu kesalahan paling umum dalam inventory management adalah menganggap \"semakin rendah inventory, semakin baik.\" Padahal tidak selalu demikian.",
      },
      {
        type: "quote",
        text: "Low Inventory → Stockout → Lost Sales → Emergency Order → Higher Cost",
      },
      {
        type: "quote",
        text: "High Inventory → Capital Tied Up → Higher Holding Cost → Slow Moving → Obsolescence",
      },
      {
        type: "paragraph",
        text: "Karena itu, tujuan inventory management bukan meminimalkan inventory tanpa batas. Tujuannya adalah menentukan inventory yang optimal terhadap kebutuhan pelanggan, risiko supply chain, dan biaya perusahaan.",
      },
      {
        type: "quote",
        text: "Inventory Optimization = Demand + Lead Time + Service Level + Cost + Risk",
      },

      { type: "heading", text: "9. Dari Inventory Management Menuju Inventory Optimization" },
      {
        type: "paragraph",
        text: "Perusahaan yang sudah memiliki sistem inventory management dapat melangkah lebih jauh menuju inventory optimization. Pendekatan yang dapat dilakukan antara lain:",
      },
      {
        type: "list",
        items: [
          "Demand Analysis → memahami pola demand, seasonality, trend, dan demand variability",
          "Demand Forecasting → meningkatkan kualitas estimasi future demand",
          "Lead Time Analysis → mengukur actual supplier lead time dan tingkat variability-nya",
          "Inventory Policy → menentukan Safety Stock, Reorder Point, EOQ, MOQ, dan Service Level",
          "Inventory Segmentation → mengelompokkan inventory berdasarkan value, demand pattern, criticality, variability, dan supply risk",
          "Performance Monitoring → memantau inventory KPI secara berkala",
          "Continuous Improvement → melakukan penyesuaian inventory policy ketika terjadi perubahan demand, supplier, lead time, harga, service requirement, atau strategi bisnis",
        ],
      },
      {
        type: "paragraph",
        text: "Dengan demikian, inventory management bukan aktivitas yang dilakukan satu kali. Inventory policy harus terus diperbarui berdasarkan perubahan kondisi supply chain.",
      },

      { type: "heading", text: "10. Checklist Inventory Management" },
      {
        type: "paragraph",
        text: "Untuk melakukan evaluasi awal, perusahaan dapat menggunakan checklist berikut:",
      },
      {
        type: "table",
        headers: ["Area", "Pertanyaan"],
        rows: [
          ["Demand", "Apakah demand memiliki pola yang jelas?"],
          ["Forecast", "Apakah forecast accuracy sudah diukur?"],
          ["Variability", "Apakah demand variability sudah dihitung?"],
          ["Lead Time", "Apakah actual lead time supplier tersedia?"],
          ["Safety Stock", "Apakah safety stock memiliki dasar perhitungan?"],
          ["ROP", "Apakah setiap item memiliki reorder point?"],
          ["EOQ", "Apakah order quantity memiliki dasar perhitungan?"],
          ["MOQ", "Apakah MOQ supplier diperhitungkan?"],
          ["Inventory", "Apakah slow-moving inventory dipantau?"],
          ["Service Level", "Apakah target service level ditentukan?"],
          ["KPI", "Apakah inventory KPI dimonitor secara rutin?"],
          ["Data", "Apakah physical dan system inventory akurat?"],
        ],
      },
      {
        type: "paragraph",
        text: "Jika sebagian besar jawaban masih \"belum\", kemungkinan perusahaan memiliki peluang yang cukup besar untuk meningkatkan inventory performance.",
      },

      { type: "heading", text: "Kesimpulan" },
      {
        type: "paragraph",
        text: "Safety Stock, Reorder Point (ROP), dan Economic Order Quantity (EOQ) merupakan tiga konsep fundamental dalam inventory management. Secara sederhana: Safety Stock menentukan berapa banyak buffer yang dibutuhkan, Reorder Point menentukan kapan perusahaan harus melakukan order, dan EOQ menentukan berapa banyak yang ideal untuk dipesan.",
      },
      {
        type: "paragraph",
        text: "Namun, inventory management yang efektif tidak cukup hanya menggunakan formula. Perusahaan perlu mengintegrasikan:",
      },
      {
        type: "quote",
        text: "Demand Forecasting + Inventory Policy + Supplier Performance + Service Level + Inventory Cost + Supply Chain Risk",
      },
      {
        type: "paragraph",
        text: "Dengan pendekatan tersebut, perusahaan tidak hanya berusaha mengurangi inventory, tetapi membangun sistem inventory yang mampu memberikan service level yang tepat dengan biaya dan modal kerja yang optimal.",
      },

      { type: "heading", text: "Ingin Mengoptimalkan Inventory Perusahaan?" },
      {
        type: "paragraph",
        text: "Inventory yang terlalu tinggi dapat mengikat modal kerja, sedangkan inventory yang terlalu rendah dapat meningkatkan risiko stockout dan lost sales.",
      },
      {
        type: "paragraph",
        text: "LeanCore Consulting membantu perusahaan melakukan Inventory Health Check, Inventory Optimization, Demand Forecasting, Safety Stock & Reorder Point Analysis, serta pengembangan Inventory KPI dan Dashboard.",
      },
      {
        type: "paragraph",
        text: "Pendekatan dapat dimulai dari data aktual perusahaan untuk mengidentifikasi:",
      },
      {
        type: "list",
        items: [
          "Slow-moving dan excess inventory",
          "Forecast accuracy",
          "Inventory turnover",
          "Supplier lead time",
          "Safety stock",
          "Reorder point",
          "Inventory policy",
          "Peluang improvement",
        ],
      },
      {
        type: "paragraph",
        text: "Inventory bukan sekadar masalah stok. Inventory adalah masalah cash flow, service level, dan supply chain performance.",
      },
      {
        type: "quote",
        text: "Apakah inventory perusahaan Anda sudah berada pada level yang optimal?",
      },
    ],
  },
  {
    slug: "demand-forecasting-metode-yang-tepat",
    image: "/article/article3.jpg",
    category: "DEMAND PLANNING",
    date: "Agustus 2026",
    readTime: "16 min read",
    title: "Demand Forecasting: Cara Forecasting Penjualan dan Menentukan Metode yang Tepat",
    excerpt:
      "Demand forecasting merupakan salah satu proses penting dalam supply chain management. Keputusan mengenai berapa banyak produk yang harus diproduksi, dibeli, disimpan, dan didistribusikan sangat bergantung pada seberapa baik perusahaan memperkirakan permintaan di masa depan.",
    author: "LeanCore Consulting",
    authorRole: "Demand Planning Practice",
    body: [
      {
        type: "paragraph",
        text: "Forecast yang terlalu tinggi dapat menyebabkan overstock, excess inventory, dan modal kerja tertahan. Sebaliknya, forecast yang terlalu rendah dapat menyebabkan stockout, lost sales, kapasitas produksi tidak mencukupi, dan menurunnya customer service level.",
      },
      {
        type: "paragraph",
        text: "Karena itu, demand forecasting bukan sekadar aktivitas memperkirakan angka penjualan. Demand forecasting adalah proses mengubah data historis, pola permintaan, informasi pasar, dan business knowledge menjadi estimasi demand yang dapat digunakan untuk mengambil keputusan.",
      },
      {
        type: "paragraph",
        text: "Artikel ini membahas pengertian demand forecasting, metode yang dapat digunakan, contoh perhitungan, cara mengukur forecast accuracy, serta bagaimana memilih metode forecasting yang tepat untuk bisnis.",
      },

      { type: "heading", text: "Apa Itu Demand Forecasting?" },
      {
        type: "paragraph",
        text: "Demand forecasting adalah proses memperkirakan jumlah permintaan produk atau jasa pada periode mendatang berdasarkan data historis dan informasi yang relevan.",
      },
      {
        type: "paragraph",
        text: "Forecast dapat digunakan untuk berbagai keputusan, seperti:",
      },
      {
        type: "list",
        items: [
          "Purchasing",
          "Inventory planning",
          "Production planning",
          "Warehouse capacity",
          "Manpower planning",
          "Transportation planning",
          "Budgeting",
          "Sales target",
          "Cash flow planning",
        ],
      },
      {
        type: "paragraph",
        text: "Contohnya, jika perusahaan memperkirakan demand bulan depan sebesar 10.000 unit, maka informasi tersebut dapat digunakan oleh berbagai fungsi: Sales menggunakan forecast untuk menyusun target, Purchasing menentukan kebutuhan pembelian, Production menentukan production plan, Warehouse mempersiapkan kapasitas penyimpanan, Logistics mempersiapkan kebutuhan transportasi, dan Finance memperkirakan revenue dan kebutuhan cash flow.",
      },
      {
        type: "quote",
        text: "Forecasting bukan hanya tanggung jawab sales atau planner. Forecast adalah input penting bagi seluruh supply chain.",
      },

      { type: "heading", text: "Mengapa Demand Forecasting Penting?" },
      {
        type: "paragraph",
        text: "Kesalahan forecasting dapat memberikan efek berantai terhadap supply chain.",
      },
      { type: "heading", text: "Jika Forecast Terlalu Tinggi" },
      {
        type: "quote",
        text: "Over Forecast → Production terlalu tinggi → Inventory meningkat → Excess / Slow Moving Inventory → Modal kerja tertahan → Holding Cost meningkat",
      },
      { type: "heading", text: "Jika Forecast Terlalu Rendah" },
      {
        type: "quote",
        text: "Under Forecast → Production / Purchasing terlalu rendah → Inventory tidak mencukupi → Stockout → Lost Sales → Customer Service menurun",
      },
      {
        type: "paragraph",
        text: "Karena itu, perusahaan membutuhkan forecasting yang tidak hanya akurat, tetapi juga relevan dengan keputusan bisnis yang akan dibuat.",
      },

      { type: "heading", text: "Forecasting Bukan Berarti Menebak Masa Depan" },
      {
        type: "paragraph",
        text: "Forecasting sering disalahartikan sebagai usaha untuk mendapatkan angka masa depan yang pasti. Padahal, demand selalu mengandung ketidakpastian. Forecast sebaiknya dipahami sebagai estimasi terbaik berdasarkan informasi yang tersedia pada saat forecast dibuat.",
      },
      {
        type: "paragraph",
        text: "Karena demand dapat berubah akibat faktor eksternal, forecast harus diperbarui secara berkala. Contohnya:",
      },
      {
        type: "list",
        items: [
          "Perubahan harga",
          "Promosi",
          "Perubahan kompetitor",
          "Seasonality",
          "Perubahan ekonomi",
          "Perubahan customer behavior",
          "Product launch",
          "Product discontinuation",
          "Perubahan distribusi",
        ],
      },
      {
        type: "paragraph",
        text: "Karena itu, forecasting yang baik membutuhkan forecast review, bukan sekadar menjalankan rumus.",
      },

      { type: "heading", text: "Jenis-Jenis Demand Forecasting" },
      {
        type: "paragraph",
        text: "Secara umum, forecasting dapat dibedakan berdasarkan pendekatan yang digunakan.",
      },
      { type: "heading", text: "1. Qualitative Forecasting" },
      {
        type: "paragraph",
        text: "Metode qualitative digunakan ketika data historis terbatas atau ketika kondisi masa depan berbeda secara signifikan dari masa lalu. Sumber informasi dapat berasal dari sales team, marketing, customer, expert judgment, management, dan market research.",
      },
      {
        type: "paragraph",
        text: "Metode ini berguna untuk produk baru, pasar baru, perubahan strategi, dan kondisi yang belum pernah terjadi sebelumnya. Kelemahannya adalah hasil forecast dapat dipengaruhi oleh subjektivitas.",
      },
      { type: "heading", text: "2. Quantitative Forecasting" },
      {
        type: "paragraph",
        text: "Quantitative forecasting menggunakan data historis dan model matematis/statistik. Beberapa metode yang umum digunakan antara lain:",
      },
      {
        type: "list",
        items: [
          "Moving Average",
          "Weighted Moving Average",
          "Exponential Smoothing",
          "Trend Analysis",
          "Regression",
          "Seasonal Forecasting",
        ],
      },
      {
        type: "paragraph",
        text: "Metode quantitative sangat berguna ketika perusahaan memiliki historical demand yang cukup.",
      },
      { type: "heading", text: "3. Time Series Forecasting" },
      {
        type: "paragraph",
        text: "Time series forecasting menggunakan pola demand masa lalu untuk memperkirakan demand di masa depan. Pola yang biasanya dianalisis meliputi:",
      },
      {
        type: "list",
        items: [
          "Level → tingkat rata-rata demand",
          "Trend → kecenderungan demand meningkat atau menurun",
          "Seasonality → pola yang berulang pada periode tertentu",
          "Random Variation → fluktuasi yang tidak dapat dijelaskan oleh pola tertentu",
        ],
      },
      {
        type: "paragraph",
        text: "Misalnya, perusahaan FMCG dapat memiliki demand yang meningkat secara konsisten setiap menjelang hari raya. Jika seasonality tersebut tidak diperhitungkan, forecast dapat menjadi bias.",
      },

      { type: "heading", text: "Metode Demand Forecasting yang Umum Digunakan" },
      { type: "heading", text: "1. Naive Forecast" },
      {
        type: "paragraph",
        text: "Metode paling sederhana adalah menggunakan demand periode sebelumnya sebagai forecast periode berikutnya.",
      },
      {
        type: "quote",
        text: "Forecast t+1 = Actual Demand t",
      },
      {
        type: "paragraph",
        text: "Contoh: jika demand bulan April 10.000 unit, maka forecast Mei 10.000 unit. Metode ini sangat sederhana dan dapat digunakan sebagai baseline untuk membandingkan metode forecasting lainnya.",
      },
      { type: "heading", text: "2. Moving Average" },
      {
        type: "paragraph",
        text: "Moving Average menggunakan rata-rata demand dari beberapa periode sebelumnya.",
      },
      {
        type: "quote",
        text: "F(t+1) = (D(t) + D(t-1) + ... + D(t-n+1)) / n",
      },
      {
        type: "table",
        headers: ["Bulan", "Demand"],
        rows: [
          ["Januari", "900"],
          ["Februari", "1.000"],
          ["Maret", "1.100"],
        ],
      },
      {
        type: "paragraph",
        text: "Forecast April menggunakan 3-month Moving Average: (900 + 1.000 + 1.100) / 3 = 1.000 unit. Maka forecast April adalah 1.000 unit.",
      },
      {
        type: "paragraph",
        text: "Moving Average relatif mudah digunakan dan cocok untuk demand yang relatif stabil. Namun, metode ini memiliki kelemahan ketika demand memiliki trend yang kuat.",
      },
      { type: "heading", text: "3. Weighted Moving Average" },
      {
        type: "paragraph",
        text: "Weighted Moving Average memberikan bobot yang berbeda pada periode tertentu. Biasanya data terbaru diberikan bobot lebih besar karena dianggap lebih relevan. Misalnya: Januari = 20%, Februari = 30%, Maret = 50%, dengan demand Januari = 900, Februari = 1.000, Maret = 1.100.",
      },
      {
        type: "quote",
        text: "Forecast April = (900 × 20%) + (1.000 × 30%) + (1.100 × 50%) = 180 + 300 + 550 = 1.030 unit",
      },
      {
        type: "paragraph",
        text: "Weighted Moving Average dapat lebih responsif terhadap perubahan terbaru dibandingkan simple Moving Average.",
      },
      { type: "heading", text: "4. Exponential Smoothing" },
      {
        type: "paragraph",
        text: "Exponential Smoothing memberikan bobot lebih besar kepada data terbaru tanpa harus menentukan bobot secara manual untuk setiap periode. Formula dasarnya:",
      },
      {
        type: "quote",
        text: "F(t+1) = αAt + (1 − α)Ft",
      },
      {
        type: "paragraph",
        text: "Keterangan: F(t+1) = forecast periode berikutnya; At = actual demand periode sekarang; Ft = forecast periode sekarang; α = smoothing constant. Nilai α berada antara 0 dan 1.",
      },
      {
        type: "paragraph",
        text: "Jika α tinggi, forecast lebih responsif terhadap perubahan terbaru. Jika α rendah, forecast lebih stabil dan tidak terlalu sensitif terhadap perubahan jangka pendek. Karena itu, pemilihan parameter α harus diuji berdasarkan performa forecast terhadap historical data.",
      },
      { type: "heading", text: "5. Trend Forecasting" },
      {
        type: "paragraph",
        text: "Jika demand menunjukkan kecenderungan meningkat atau menurun, metode berbasis trend dapat digunakan. Misalnya:",
      },
      {
        type: "table",
        headers: ["Tahun", "Demand"],
        rows: [
          ["2022", "10.000"],
          ["2023", "11.000"],
          ["2024", "12.000"],
          ["2025", "13.000"],
        ],
      },
      {
        type: "paragraph",
        text: "Terdapat indikasi trend peningkatan demand. Dalam kondisi seperti ini, Moving Average sederhana mungkin menghasilkan forecast yang terlambat mengikuti trend. Model trend dapat memberikan estimasi yang lebih sesuai.",
      },
      { type: "heading", text: "6. Regression Forecasting" },
      {
        type: "paragraph",
        text: "Regression dapat digunakan ketika demand dipengaruhi oleh variabel tertentu. Contohnya:",
      },
      {
        type: "quote",
        text: "Demand = f(Harga, Promosi, GDP, Customer, Seasonality)",
      },
      {
        type: "paragraph",
        text: "Misalnya perusahaan ingin mengetahui apakah promosi memengaruhi penjualan. Model sederhana dapat dituliskan:",
      },
      {
        type: "quote",
        text: "Demand = a + b(Promotion)",
      },
      {
        type: "paragraph",
        text: "Dengan regression, perusahaan tidak hanya menggunakan historical demand, tetapi juga dapat memasukkan causal factors. Metode ini lebih kompleks tetapi dapat memberikan insight yang lebih dalam.",
      },

      { type: "heading", text: "Bagaimana Memilih Metode Forecasting yang Tepat?" },
      {
        type: "paragraph",
        text: "Tidak ada satu metode forecasting yang selalu terbaik untuk semua produk. Metode yang tepat tergantung pada pola demand, jumlah data historis, tingkat variability, seasonality, trend, forecast horizon, business context, dan availability of causal variables.",
      },
      {
        type: "table",
        headers: ["Kondisi Demand", "Metode yang Dapat Dipertimbangkan"],
        rows: [
          ["Relatif stabil", "Moving Average"],
          ["Data terbaru lebih relevan", "Weighted Moving Average"],
          ["Perubahan demand cukup cepat", "Exponential Smoothing"],
          ["Memiliki trend", "Trend / Regression"],
          ["Memiliki seasonality", "Seasonal Model"],
          ["Ada faktor penyebab yang jelas", "Regression / Causal Model"],
          ["Data sangat terbatas", "Qualitative Forecast"],
        ],
      },
      {
        type: "paragraph",
        text: "Namun, tabel tersebut hanya merupakan starting point. Metode terbaik seharusnya ditentukan melalui pengujian forecast accuracy, bukan hanya berdasarkan asumsi.",
      },

      { type: "heading", text: "Bagaimana Mengukur Forecast Accuracy?" },
      {
        type: "paragraph",
        text: "Forecast yang terlihat masuk akal belum tentu akurat. Perusahaan perlu mengukur selisih antara actual demand dan forecast. Beberapa ukuran forecast accuracy yang umum digunakan adalah:",
      },
      { type: "heading", text: "1. Forecast Error" },
      {
        type: "quote",
        text: "Error = Actual − Forecast",
      },
      {
        type: "paragraph",
        text: "Contoh: Actual = 1.000, Forecast = 900, maka Error = 1.000 − 900 = 100 unit. Forecast mengalami under-forecast sebesar 100 unit.",
      },
      { type: "heading", text: "2. MAD → Mean Absolute Deviation" },
      {
        type: "quote",
        text: "MAD = Σ|Actual − Forecast| / n",
      },
      {
        type: "paragraph",
        text: "Semakin kecil MAD, semakin kecil rata-rata kesalahan forecast dalam satuan unit. MAD sangat mudah dipahami oleh planner dan operational team.",
      },
      { type: "heading", text: "3. MAPE → Mean Absolute Percentage Error" },
      {
        type: "quote",
        text: "MAPE = (Σ |Actual − Forecast| / Actual) / n × 100%",
      },
      {
        type: "paragraph",
        text: "Contoh: Actual = 1.000, Forecast = 900, maka Absolute Percentage Error = |1.000 − 900| / 1.000 × 100% = 10%. MAPE kemudian dihitung untuk seluruh periode dan dirata-ratakan.",
      },
      {
        type: "paragraph",
        text: "Secara umum, MAPE lebih mudah dikomunikasikan kepada manajemen karena menggunakan persentase. Namun, MAPE memiliki keterbatasan ketika actual demand bernilai nol atau sangat kecil.",
      },
      { type: "heading", text: "4. Forecast Bias" },
      {
        type: "paragraph",
        text: "Forecast accuracy saja belum cukup. Perusahaan juga perlu mengetahui apakah forecast cenderung over forecast atau under forecast.",
      },
      {
        type: "paragraph",
        text: "Misalnya, jika actual selalu lebih tinggi daripada forecast, artinya perusahaan mungkin memiliki kecenderungan under-forecast. Jika kondisi ini terjadi terus-menerus, dampaknya dapat berupa stockout, lost sales, emergency purchasing, dan production shortage.",
      },
      {
        type: "paragraph",
        text: "Karena itu, perusahaan sebaiknya memantau accuracy sekaligus bias.",
      },

      { type: "heading", text: "Contoh Evaluasi Forecast" },
      {
        type: "paragraph",
        text: "Misalkan perusahaan memiliki data:",
      },
      {
        type: "table",
        headers: ["Bulan", "Actual", "Forecast", "Error"],
        rows: [
          ["Jan", "1.000", "900", "100"],
          ["Feb", "1.100", "1.000", "100"],
          ["Mar", "1.200", "1.100", "100"],
          ["Apr", "1.300", "1.200", "100"],
        ],
      },
      {
        type: "paragraph",
        text: "Terlihat bahwa forecast selalu berada di bawah actual. Secara sekilas forecast mungkin terlihat cukup dekat. Namun ada indikasi kuat bahwa forecast memiliki systematic under-forecast bias.",
      },
      {
        type: "paragraph",
        text: "Ini penting karena forecast bias dapat memengaruhi keputusan:",
      },
      {
        type: "quote",
        text: "Forecast → Inventory → Purchasing → Production → Service Level",
      },
      {
        type: "paragraph",
        text: "Jadi perusahaan tidak cukup hanya bertanya \"Berapa persen forecast accuracy kita?\", tetapi juga \"Apakah forecast kita secara sistematis terlalu tinggi atau terlalu rendah?\"",
      },

      { type: "heading", text: "Forecast Accuracy Bukan Satu-Satunya Ukuran Forecast yang Baik" },
      {
        type: "paragraph",
        text: "Forecast yang sangat akurat secara statistik belum tentu paling berguna bagi bisnis. Misalnya Forecast A memiliki MAPE 8% dan Forecast B memiliki MAPE 10%. Secara statistik, Forecast A lebih baik.",
      },
      {
        type: "paragraph",
        text: "Namun jika Forecast A tidak mampu menangkap perubahan demand akibat campaign marketing, sementara Forecast B dapat mengantisipasi campaign tersebut, maka Forecast B mungkin lebih berguna untuk keputusan bisnis.",
      },
      {
        type: "paragraph",
        text: "Karena itu, forecasting perlu menggabungkan statistical forecast dengan business knowledge. Pendekatan ini sering disebut sebagai collaborative forecasting atau bagian dari proses Sales & Operations Planning (S&OP).",
      },

      { type: "heading", text: "Statistical Forecast vs Sales Adjustment" },
      {
        type: "paragraph",
        text: "Dalam praktik perusahaan, forecast sering kali mengalami adjustment dari Sales atau Marketing. Misalnya Statistical Forecast = 10.000 unit, kemudian Sales memberikan informasi bahwa bulan depan ada campaign besar, sehingga forecast disesuaikan menjadi Final Forecast = 12.000 unit.",
      },
      {
        type: "paragraph",
        text: "Proses ini dapat memberikan nilai tambah. Namun, adjustment sebaiknya berbasis data dan dapat ditelusuri. Perusahaan dapat membuat struktur:",
      },
      {
        type: "quote",
        text: "Statistical Forecast → Sales / Marketing Input → Consensus Forecast → Final Forecast",
      },
      {
        type: "paragraph",
        text: "Dengan demikian, perusahaan dapat membedakan apa yang dikatakan model, apa yang ditambahkan oleh business team, dan apa yang akhirnya digunakan sebagai planning number.",
      },

      { type: "heading", text: "Forecasting dan Inventory Management" },
      {
        type: "paragraph",
        text: "Demand forecasting memiliki hubungan yang sangat erat dengan inventory management.",
      },
      {
        type: "quote",
        text: "Under Forecast → Inventory terlalu rendah → Stockout → Lost Sales",
      },
      {
        type: "quote",
        text: "Over Forecast → Inventory terlalu tinggi → Excess Inventory → Capital Tied Up",
      },
      {
        type: "paragraph",
        text: "Karena itu, forecast accuracy merupakan salah satu input penting dalam menentukan inventory policy. Forecast yang lebih baik dapat membantu perusahaan menentukan safety stock, reorder point, purchasing quantity, production plan, dan capacity requirement.",
      },

      { type: "heading", text: "Forecasting dalam Supply Chain" },
      {
        type: "paragraph",
        text: "Forecasting sebenarnya tidak berhenti pada penjualan. Forecast dapat digunakan untuk menghubungkan berbagai proses:",
      },
      {
        type: "quote",
        text: "Demand Forecast → Sales Planning → Production Planning → Material Requirement Planning → Purchasing → Inventory Planning → Warehouse → Distribution",
      },
      {
        type: "paragraph",
        text: "Dengan demikian, forecasting merupakan salah satu input utama dalam supply chain planning. Kesalahan pada forecast dapat menyebar ke seluruh rantai pasok. Fenomena ini sering disebut sebagai Bullwhip Effect, ketika variasi permintaan semakin besar ketika bergerak dari downstream menuju upstream supply chain.",
      },

      { type: "heading", text: "7 Kesalahan Umum dalam Demand Forecasting" },
      { type: "heading", text: "1. Menggunakan Satu Metode untuk Semua Produk" },
      {
        type: "paragraph",
        text: "Tidak semua SKU memiliki demand pattern yang sama. Produk A mungkin stabil, Produk B mungkin seasonal, dan Produk C mungkin intermittent. Karena itu, satu metode untuk seluruh SKU belum tentu optimal.",
      },
      { type: "heading", text: "2. Tidak Memperhatikan Seasonality" },
      {
        type: "paragraph",
        text: "Demand beberapa produk dapat berubah signifikan berdasarkan bulan, hari raya, cuaca, musim, dan periode promosi. Seasonality yang tidak diperhitungkan dapat menyebabkan forecast bias.",
      },
      { type: "heading", text: "3. Hanya Melihat Historical Sales" },
      {
        type: "paragraph",
        text: "Historical data penting, tetapi tidak selalu cukup. Forecast juga perlu mempertimbangkan promotion, price change, competitor, customer project, new product, product discontinuation, dan market condition.",
      },
      { type: "heading", text: "4. Tidak Mengukur Forecast Accuracy" },
      {
        type: "paragraph",
        text: "Tanpa KPI, perusahaan tidak mengetahui apakah metode forecasting benar-benar membaik.",
      },
      { type: "heading", text: "5. Tidak Mengukur Bias" },
      {
        type: "paragraph",
        text: "Forecast dapat terlihat akurat tetapi secara konsisten terlalu tinggi atau terlalu rendah.",
      },
      { type: "heading", text: "6. Sales Adjustment Tanpa Data" },
      {
        type: "paragraph",
        text: "Business knowledge penting, tetapi adjustment yang tidak terukur dapat meningkatkan forecast error.",
      },
      { type: "heading", text: "7. Menganggap Forecast sebagai Angka Pasti" },
      {
        type: "paragraph",
        text: "Forecast selalu mengandung uncertainty. Karena itu, perusahaan perlu memikirkan forecast bersama variability dan risk, bukan hanya satu angka forecast.",
      },

      { type: "heading", text: "Forecasting yang Baik Membutuhkan Proses, Bukan Sekadar Rumus" },
      {
        type: "paragraph",
        text: "Perusahaan dapat membangun forecasting process sederhana sebagai berikut:",
      },
      {
        type: "list",
        items: [
          "Step 1 → Collect Data: kumpulkan historical sales, shipment, order, stockout, promotion, price, dan customer data",
          "Step 2 → Clean Data: identifikasi missing data, outlier, stockout period, abnormal sales, dan data error",
          "Step 3 → Analyze Demand Pattern: identifikasi level, trend, seasonality, variability, dan intermittency",
          "Step 4 → Select Forecasting Method: uji beberapa metode seperti Naive, Moving Average, Weighted Moving Average, Exponential Smoothing, Regression, dan Seasonal Model",
          "Step 5 → Measure Accuracy: gunakan MAD, MAPE, RMSE, dan Bias",
          "Step 6 → Generate Statistical Forecast: model menghasilkan baseline forecast",
          "Step 7 → Add Business Intelligence: Sales, Marketing, Operations, dan Supply Chain memberikan informasi mengenai faktor yang belum tercermin dalam historical data",
          "Step 8 → Consensus Forecast: tim menyepakati forecast yang akan digunakan",
          "Step 9 → Monitor: bandingkan forecast vs actual dan lakukan continuous improvement",
        ],
      },

      { type: "heading", text: "Forecasting dan S&OP" },
      {
        type: "paragraph",
        text: "Pada perusahaan yang lebih matang, forecasting menjadi bagian dari proses Sales & Operations Planning (S&OP). S&OP membantu menyelaraskan:",
      },
      {
        type: "quote",
        text: "Demand ↔ Supply ↔ Inventory ↔ Capacity ↔ Financial Plan",
      },
      {
        type: "paragraph",
        text: "Contohnya, Sales memperkirakan demand 100.000 unit, namun kapasitas produksi hanya 80.000 unit. Maka perusahaan harus mengambil keputusan seperti menambah shift, menggunakan third-party manufacturing, mengubah allocation, menambah inventory sebelumnya, atau memprioritaskan customer tertentu.",
      },
      {
        type: "paragraph",
        text: "Di sinilah forecasting berubah dari sekadar aktivitas statistik menjadi strategic decision support.",
      },

      { type: "heading", text: "Checklist Demand Forecasting" },
      {
        type: "paragraph",
        text: "Gunakan checklist berikut untuk melakukan evaluasi awal:",
      },
      {
        type: "table",
        headers: ["Area", "Pertanyaan"],
        rows: [
          ["Data", "Apakah historical demand tersedia?"],
          ["Data Quality", "Apakah data sudah dibersihkan dari stockout dan anomaly?"],
          ["Demand Pattern", "Apakah trend dan seasonality sudah dianalisis?"],
          ["Method", "Apakah perusahaan menguji lebih dari satu metode?"],
          ["Accuracy", "Apakah MAPE/MAD diukur?"],
          ["Bias", "Apakah forecast bias dipantau?"],
          ["SKU", "Apakah metode berbeda digunakan untuk demand pattern berbeda?"],
          ["Business Input", "Apakah Sales/Marketing memberikan market intelligence?"],
          ["Consensus", "Apakah terdapat proses consensus forecast?"],
          ["Inventory", "Apakah forecast terhubung dengan inventory planning?"],
          ["Review", "Apakah forecast diperbarui secara berkala?"],
        ],
      },
      {
        type: "paragraph",
        text: "Semakin banyak jawaban \"belum\", semakin besar peluang perusahaan untuk meningkatkan forecast maturity.",
      },

      { type: "heading", text: "Kesimpulan" },
      {
        type: "paragraph",
        text: "Demand forecasting merupakan salah satu fondasi penting dalam supply chain management. Forecast yang terlalu rendah dapat menyebabkan stockout, lost sales, dan customer service problem. Sedangkan forecast yang terlalu tinggi dapat menyebabkan overstock, excess inventory, dan capital tied up.",
      },
      {
        type: "paragraph",
        text: "Karena itu, perusahaan perlu membangun forecasting process yang menggabungkan:",
      },
      {
        type: "quote",
        text: "Data → Demand Pattern → Statistical Forecast → Business Intelligence → Consensus → Accuracy Measurement → Continuous Improvement",
      },
      {
        type: "paragraph",
        text: "Tidak ada satu metode forecasting yang selalu paling baik. Moving Average dapat cocok untuk demand yang relatif stabil. Weighted Moving Average dapat digunakan ketika data terbaru lebih relevan. Exponential Smoothing dapat digunakan untuk meningkatkan responsiveness terhadap perubahan. Trend dan Regression dapat dipertimbangkan ketika terdapat trend atau causal factors. Sedangkan demand dengan pola seasonal membutuhkan pendekatan yang mampu menangkap seasonality.",
      },
      {
        type: "paragraph",
        text: "Pada akhirnya, pertanyaan yang lebih tepat bukan \"Metode forecasting apa yang paling bagus?\", tetapi \"Metode forecasting apa yang paling sesuai dengan karakteristik demand, horizon perencanaan, kualitas data, dan keputusan bisnis yang akan dibuat?\"",
      },
      {
        type: "paragraph",
        text: "Forecast yang baik bukan forecast yang sekadar menghasilkan angka. Forecast yang baik adalah forecast yang membantu perusahaan membuat keputusan supply chain yang lebih baik.",
      },

      { type: "heading", text: "Ingin Meningkatkan Forecast Accuracy Perusahaan?" },
      {
        type: "paragraph",
        text: "Kesalahan forecasting dapat berdampak langsung pada inventory, purchasing, production, cash flow, dan customer service.",
      },
      {
        type: "paragraph",
        text: "LeanCore Consulting membantu perusahaan melakukan Demand Forecasting Assessment, Forecast Accuracy Analysis, Forecasting Model Development, Inventory Optimization, serta pengembangan Forecasting Dashboard.",
      },
      {
        type: "paragraph",
        text: "Assessment dapat dimulai dengan menganalisis:",
      },
      {
        type: "list",
        items: [
          "Historical demand",
          "Demand pattern",
          "Forecast accuracy",
          "Forecast bias",
          "SKU segmentation",
          "Forecasting method",
          "Inventory impact",
          "Proses consensus forecasting",
        ],
      },
      {
        type: "paragraph",
        text: "Forecasting bukan sekadar memprediksi penjualan. Forecasting adalah dasar untuk membuat keputusan supply chain yang lebih baik.",
      },
      {
        type: "quote",
        text: "Apakah forecast perusahaan Anda sudah cukup akurat untuk menjadi dasar keputusan inventory dan supply chain?",
      },
    ],
  },
];