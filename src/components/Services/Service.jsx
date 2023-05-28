export const Service = ({ img, title, descr }) => {
    return (
        <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="service-block mb-5">
                <img src={img} alt="" class="img-fluid" />
                <div class="content">
                    <h4 class="mt-4 mb-2 title-color">{title}</h4>
                    <p class="mb-4">{descr}</p>
                </div>
            </div>
        </div>
    )
}