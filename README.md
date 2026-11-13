<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>StaGra: MRI Segmentation via Training-Free Statistical-Graph Framework</title>
  <meta name="description" content="StaGra combines statistical intensity modeling and 3D graph-cut refinement to segment brain tumor subregions from multimodal MRI without training a shared segmentation model across subjects.">

  <!-- Open Graph / Social Preview khi chia sẻ link tại hội nghị -->
  <meta property="og:title" content="StaGra: MRI Segmentation via Training-Free Statistical-Graph Framework">
  <meta property="og:description" content="Accepted at SoICT 2026. Training-free per-volume statistical modeling and 3D graph-cut refinement for multimodal brain tumor MRI segmentation.">
  <meta property="og:type" content="website">

  <!-- Google Fonts & Bulma CSS (chuẩn giao diện Nerfies) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Castoro&family=Google+Sans:wght@400;500;700&family=Noto+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css">
  <link rel="stylesheet" href="./static/css/index.css">
</head>
<body>

  <!-- Thanh điều hướng nhanh cho người dùng di động quét QR -->
  <nav class="navbar is-light is-fixed-top quick-nav" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <a class="navbar-item has-text-weight-bold" href="#top">StaGra</a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" href="#overview">Overview</a>
          <a class="navbar-item" href="#key-ideas">Key Ideas</a>
          <a class="navbar-item" href="#method">Method</a>
          <a class="navbar-item" href="#evaluation">Evaluation</a>
          <a class="navbar-item" href="#limitations">Limitations</a>
          <a class="navbar-item" href="#bibtex">BibTeX</a>
        </div>
      </div>
    </div>
  </nav>

  <!-- HERO SECTION -->
  <section id="top" class="hero publication-hero">
    <div class="hero-body">
      <div class="container is-max-desktop">
        <div class="columns is-centered">
          <div class="column has-text-centered">

            <div class="venue-badge mb-3">
              <span class="tag is-info is-medium is-rounded has-text-weight-semibold">
                Accepted at SoICT 2026
              </span>
            </div>

            <h1 class="title is-1 publication-title">
              <span class="project-acronym">StaGra:</span> MRI Segmentation via Training-Free Statistical-Graph Framework
            </h1>

            <!-- Danh sách tác giả -->
            <div class="is-size-5 publication-authors">
              <span class="author-block">Thanh-Tin Bui<sup>1,3*</sup>,</span>
              <span class="author-block">Hoang-Hiep Mai<sup>1,3*</sup>,</span>
              <span class="author-block">Van-Duc Tran<sup>1,2*</sup>,</span>
              <span class="author-block">Anh-Khoa Nguyen-Van<sup>1,2*</sup>,</span>
              <span class="author-block">Duy-Tan Nguyen<sup>1,2*</sup>,</span>
              <span class="author-block">Loi Nguyen Khanh<sup>1,2</sup></span>
            </div>

            <!-- Đơn vị công tác -->
            <div class="is-size-6 publication-affiliations mt-2">
              <span class="affiliation-block"><sup>1</sup>HCMUT EE Machine Learning &amp; IoT Lab</span><br>
              <span class="affiliation-block"><sup>2</sup>Ho Chi Minh City University of Technology, VNU-HCM, Vietnam</span><br>
              <span class="affiliation-block"><sup>3</sup>Ho Chi Minh City University of Science, VNU-HCM, Vietnam</span>
            </div>

            <div class="is-size-7 has-text-grey mt-2">
              <sup>*</sup>Equal contribution as first authors.
            </div>

            <!-- Các nút truy cập nhanh (Tối ưu bấm bằng ngón tay trên điện thoại) -->
            <div class="column has-text-centered mt-4">
              <div class="publication-links">
                <!-- Cập nhật href thành link PDF thực tế khi có bản camera-ready -->
                <span class="link-block">
                  <a href="#resources" class="external-link button is-normal is-rounded is-dark">
                    <span class="icon"><i class="fas fa-file-pdf"></i></span>
                    <span>Paper</span>
                  </a>
                </span>
                <!-- Cập nhật href thành link repo code GitHub của nhóm -->
                <span class="link-block">
                  <a href="#resources" class="external-link button is-normal is-rounded is-dark">
                    <span class="icon"><i class="fab fa-github"></i></span>
                    <span>Code</span>
                  </a>
                </span>
                <!-- Cập nhật href thành link file Poster PDF -->
                <span class="link-block">
                  <a href="#resources" class="external-link button is-normal is-rounded is-dark">
                    <span class="icon"><i class="fas fa-chalkboard"></i></span>
                    <span>Poster</span>
                  </a>
                </span>
                <span class="link-block">
                  <a href="#bibtex" class="external-link button is-normal is-rounded is-dark">
                    <span class="icon"><i class="fas fa-quote-right"></i></span>
                    <span>BibTeX</span>
                  </a>
                </span>
              </div>
            </div>

            <!-- One-sentence summary -->
            <div class="box summary-callout mt-4">
              <p class="is-size-5-desktop is-size-6-mobile has-text-weight-medium">
                StaGra combines statistical intensity modeling and 3D graph-cut refinement to segment brain tumor subregions from multimodal MRI without training a shared segmentation model across subjects.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TEASER FIGURE (Chèn ảnh minh họa tổng quan vào static/images/teaser.png) -->
  <section class="hero teaser">
    <div class="container is-max-desktop">
      <div class="hero-body pt-0">
        <figure class="figure-frame">
          <img src="./static/images/teaser.png" alt="StaGra Multimodal MRI Brain Tumor Segmentation Overview"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="figure-placeholder" style="display: none;">
            <div>
              <i class="fas fa-brain fa-2x mb-2 has-text-grey"></i>
              <p class="has-text-weight-semibold">Teaser Figure Placeholder</p>
              <p class="is-size-7 has-text-grey">Upload your visual overview to <code>static/images/teaser.png</code> (Multimodal MRI inputs: T1, T1ce, T2, FLAIR &rarr; 3D WT, TC, ET masks).</p>
            </div>
          </div>
          <figcaption class="has-text-centered is-size-6 mt-3 has-text-grey-dark">
            <strong>StaGra Overview:</strong> Per-volume statistical intensity modeling and 3D graph-cut spatial refinement applied to multimodal MRI (T1, T1ce, T2, FLAIR) to delineate whole-tumor (WT), tumor-core (TC), and enhancing-tumor (ET) regions without cross-subject training.
          </figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- OVERVIEW -->
  <section id="overview" class="section">
    <div class="container is-max-desktop">
      <div class="columns is-centered has-text-centered">
        <div class="column is-four-fifths">
          <h2 class="title is-3">Overview</h2>
          <div class="content has-text-justified">
            <p>
              Brain tumor segmentation requires identifying structures with overlapping intensities and irregular boundaries. StaGra explores a statistical approach that fits an individual MRI volume and uses spatial relationships to refine the resulting segmentation.
            </p>
            <p>
              The framework takes four MRI sequences—<strong>T1</strong>, <strong>contrast-enhanced T1 (T1ce)</strong>, <strong>T2</strong>, and <strong>FLAIR</strong>—and operates in two stages. First, multi-planar adaptive thresholding identifies a candidate tumor region. Within this region, kernel density estimation provides starting points for a weighted Gaussian mixture model. A three-dimensional graph-cut procedure then refines voxel assignments using a spatial energy model. Intensity-based tissue mapping and post-processing produce whole-tumor, tumor-core, and enhancing-tumor masks.
            </p>
            <div class="notification is-info is-light">
              Here, <strong>“training-free”</strong> refers to the absence of cross-subject model training. StaGra still estimates mixture parameters for each volume and uses manually specified hyperparameters and tissue-assignment rules.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- KEY IDEAS -->
  <section id="key-ideas" class="section has-background-light">
    <div class="container is-max-desktop">
      <h2 class="title is-3 has-text-centered mb-5">Key Ideas</h2>
      <div class="columns is-multiline">

        <div class="column is-one-third">
          <div class="card idea-card">
            <div class="card-content">
              <div class="idea-icon mb-3"><i class="fas fa-crosshairs"></i></div>
              <h3 class="title is-5">1. Localize before modeling</h3>
              <p class="content is-size-6">
                A candidate region focuses the statistical analysis on potentially abnormal tissue. Adaptive thresholding across three orthogonal views combines complementary spatial information before volumetric filtering.
              </p>
            </div>
          </div>
        </div>

        <div class="column is-one-third">
          <div class="card idea-card">
            <div class="card-content">
              <div class="idea-icon mb-3"><i class="fas fa-chart-area"></i></div>
              <h3 class="title is-5">2. Initialize from image density</h3>
              <p class="content is-size-6">
                Kernel density estimation identifies high-density locations in the multimodal feature space. These locations initialize the Gaussian mixture model, which estimates tissue-related intensity distributions within the candidate region.
              </p>
            </div>
          </div>
        </div>

        <div class="column is-one-third">
          <div class="card idea-card">
            <div class="card-content">
              <div class="idea-icon mb-3"><i class="fas fa-project-diagram"></i></div>
              <h3 class="title is-5">3. Refine with 3D spatial structure</h3>
              <p class="content is-size-6">
                Voxelwise statistical assignments can be spatially fragmented. StaGra combines their data costs with contrast-sensitive neighborhood penalties and applies graph-cut moves to seek a lower-energy volumetric labeling.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- METHOD -->
  <section id="method" class="section">
    <div class="container is-max-desktop">
      <div class="columns is-centered">
        <div class="column is-four-fifths">
          <h2 class="title is-3 has-text-centered">Method</h2>

          <!-- Pipeline Diagram -->
          <figure class="figure-frame mb-5">
            <img src="./static/images/pipeline.png" alt="StaGra Two-Stage Pipeline Diagram"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="figure-placeholder" style="display: none;">
              <div>
                <i class="fas fa-sitemap fa-2x mb-2 has-text-grey"></i>
                <p class="has-text-weight-semibold">Method Pipeline Figure Placeholder</p>
                <p class="is-size-7 has-text-grey">Upload your architecture diagram to <code>static/images/pipeline.png</code> (Stage 1: Candidate localization &rarr; Stage 2: KDE + Weighted GMM + 3D Graph-Cut).</p>
              </div>
            </div>
          </figure>

          <div class="content has-text-justified">
            <h3 class="title is-4">Stage 1 — Candidate localization</h3>
            <p>
              FLAIR images are processed across three orthogonal orientations. Adaptive thresholding and intensity rules produce candidate masks, which are combined by weighted voting. Volumetric filtering and morphological operations consolidate the candidate region of interest.
            </p>
            <p>
              This region defines the spatial domain for the next stage. Candidate coverage therefore matters: tumor tissue excluded at this stage cannot be recovered by subsequent modeling restricted to that region.
            </p>

            <h3 class="title is-4 mt-5">Stage 2 — Statistical modeling and spatial refinement</h3>
            <p>
              Each active voxel is represented by its normalized T1, T1ce, T2, and FLAIR intensities. Importance weighting and feature standardization prepare the multimodal features for density estimation and mixture fitting.
            </p>
            <p>
              Kernel density peaks initialize a five-component Gaussian mixture model. Weighted expectation–maximization estimates the mixture parameters for the current volume. Fixed intensity rules associate the resulting components with tissue categories and provide additional preferences for voxel labeling.
            </p>
            <p>
              Spatial refinement uses a contrast-sensitive Potts model over neighboring voxels in three dimensions. Unary costs encode statistical evidence, while pairwise costs penalize label differences according to local feature contrast. Alpha-expansion graph-cut moves approximately minimize this multi-label energy; they do not guarantee an exact global optimum.
            </p>

            <h3 class="title is-4 mt-5">Output regions</h3>
            <p>The final output is expressed using three standard BraTS evaluation regions:</p>

            <div class="table-container">
              <table class="table is-bordered is-striped is-fullwidth">
                <thead>
                  <tr>
                    <th>Region</th>
                    <th>Abbreviation</th>
                    <th>Definition</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Whole tumor</strong></td>
                    <td><code>WT</code></td>
                    <td>Edema, necrotic or non-enhancing core, and enhancing tumor</td>
                  </tr>
                  <tr>
                    <td><strong>Tumor core</strong></td>
                    <td><code>TC</code></td>
                    <td>Necrotic or non-enhancing core and enhancing tumor</td>
                  </tr>
                  <tr>
                    <td><strong>Enhancing tumor</strong></td>
                    <td><code>ET</code></td>
                    <td>Enhancing tumor component</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- EVALUATION -->
  <section id="evaluation" class="section has-background-light">
    <div class="container is-max-desktop">
      <div class="columns is-centered">
        <div class="column is-four-fifths">
          <h2 class="title is-3 has-text-centered">Evaluation</h2>
          <div class="content has-text-justified">
            <p>
              The study uses multimodal MRI from <strong>BraTS 2021</strong> and examines segmentation of <strong>WT</strong>, <strong>TC</strong>, and <strong>ET</strong>. <strong>Dice similarity</strong> measures overlap with the reference segmentation, while the <strong>95th-percentile Hausdorff distance (HD95)</strong> measures boundary disagreement. Higher Dice and lower HD95 indicate better agreement under the specified evaluation protocol.
            </p>
            <p>
              Whole-pipeline comparisons and component ablations answer different questions. Comparisons with other segmentation pipelines assess overall behavior, while controlled ablations examine individual choices within StaGra, such as initialization or spatial inference. A difference between complete pipelines should not be attributed to a single component unless that component is isolated experimentally.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SCOPE AND LIMITATIONS -->
  <section id="limitations" class="section">
    <div class="container is-max-desktop">
      <div class="columns is-centered">
        <div class="column is-four-fifths">
          <h2 class="title is-3 has-text-centered">Scope and Limitations</h2>
          <div class="content has-text-justified">
            <p>
              StaGra investigates an interpretable, per-volume approach to brain tumor segmentation. Its output depends on candidate-region coverage, intensity normalization, tissue-assignment rules, and post-processing. Overlapping tissue intensities and small or disconnected tumor components can make segmentation difficult.
            </p>
            <p>
              Evaluation on preprocessed BraTS data does not establish performance on arbitrary clinical acquisitions, missing MRI sequences, or unseen acquisition protocols. Potential uses in coarse localization or pseudo-label generation require further task-specific validation.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- RESOURCES & CONTACT -->
  <section id="resources" class="section has-background-light">
    <div class="container is-max-desktop">
      <div class="columns is-centered">
        <div class="column is-four-fifths">
          <h2 class="title is-3 has-text-centered">Resources &amp; Contact</h2>

          <div class="columns mt-4">
            <div class="column is-four-desktop">
              <div class="box resource-box">
                <h3 class="title is-5"><i class="fas fa-file-alt mr-2"></i>Paper</h3>
                <p class="is-size-6">Describes the method and experimental protocol.</p>
                <!-- Thay # bằng đường dẫn file PDF khi upload -->
                <a href="./static/files/StaGra_Paper.pdf" class="button is-small is-link is-outlined mt-3">
                  <span>View Paper PDF</span>
                </a>
              </div>
            </div>

            <div class="column is-four-desktop">
              <div class="box resource-box">
                <h3 class="title is-5"><i class="fab fa-github mr-2"></i>Code Release</h3>
                <p class="is-size-6">Identifies the implementation and configuration associated with the reported results.</p>
                <!-- Thay # bằng link repository source code -->
                <a href="https://github.com/" target="_blank" rel="noopener" class="button is-small is-link is-outlined mt-3">
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            <div class="column is-four-desktop">
              <div class="box resource-box">
                <h3 class="title is-5"><i class="fas fa-image mr-2"></i>Poster</h3>
                <p class="is-size-6">Provides a concise visual summary of the study presented at SoICT 2026.</p>
                <!-- Thay # bằng đường dẫn file Poster PDF -->
                <a href="./static/files/StaGra_Poster.pdf" class="button is-small is-link is-outlined mt-3">
                  <span>View Poster PDF</span>
                </a>
              </div>
            </div>
          </div>

          <div class="box mt-4">
            <h3 class="title is-5">Contact</h3>
            <p>
              For questions about the project, please contact <strong>Van-Duc Tran</strong> at
              <a href="mailto:duc.tranduc2006@hcmut.edu.vn">duc.tranduc2006@hcmut.edu.vn</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- BIBTEX -->
  <section id="bibtex" class="section">
    <div class="container is-max-desktop content">
      <div class="columns is-centered">
        <div class="column is-four-fifths">
          <div class="is-flex is-justify-content-space-between is-align-items-center mb-2">
            <h2 class="title is-3 mb-0">BibTeX</h2>
            <button id="copyBibtexBtn" class="button is-small is-dark is-rounded" onclick="copyBibtex()">
              <span class="icon"><i class="fas fa-copy"></i></span>
              <span id="copyBtnText">Copy BibTeX</span>
            </button>
          </div>
          <pre id="bibtexCode"><code>@inproceedings{bui2026stagra,
  title     = {MRI Segmentation via Training-Free Statistical-Graph Framework},
  author    = {Bui, Thanh-Tin and Mai, Hoang-Hiep and Tran, Van-Duc and Nguyen-Van, Anh-Khoa and Nguyen, Duy-Tan and Khanh, Loi Nguyen},
  booktitle = {Proceedings of the International Symposium on Information and Communication Technology (SoICT)},
  year      = {2026}
}</code></pre>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER & ATTRIBUTION -->
  <footer class="footer">
    <div class="container is-max-desktop">
      <div class="content has-text-centered is-size-6">
        <p>
          Website template adapted from the
          <a href="https://nerfies.github.io/" target="_blank" rel="noopener">Nerfies project page</a>
          by Keunhong Park and collaborators, licensed under
          <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">CC BY-SA 4.0</a>.
        </p>
      </div>
    </div>
  </footer>

  <script>
    // Mobile navbar toggle
    document.addEventListener('DOMContentLoaded', () => {
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    });

    // Copy BibTeX helper
    function copyBibtex() {
      const text = document.getElementById('bibtexCode').innerText;
      navigator.clipboard.writeText(text).then(() => {
        const btnText = document.getElementById('copyBtnText');
        btnText.innerText = 'Copied!';
        setTimeout(() => { btnText.innerText = 'Copy BibTeX'; }, 2000);
      });
    }
  </script>

</body>
</html>