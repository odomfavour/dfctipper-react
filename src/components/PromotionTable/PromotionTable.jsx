import React from 'react'

const PromotionTable = () => {
    return (
        <section>
            <table className="table text-white table-bordered table-responsive">
                <thead>
                    <tr>
                        <th scope="col">Promotion Link</th>
                        <th scope="col">Number </th>
                        <th scope="col">Budget</th>
                        <th scope="col">Status</th>
                        <th scope="col">Date Created</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>http://t.me/dfctippingbot?start=538268078</td>
                        <td>100</td>
                        <td>1000000000DFC</td>
                        <td>Published</td>
                        <td>Monday 24th January 2022 7:40pm</td>
                    </tr>
                    <tr>
                        <td>http://t.me/dfctippingbot?start=538268078</td>
                        <td>100</td>
                        <td>1000000000DFC</td>
                        <td>Published</td>
                        <td>Monday 24th January 2022 7:40pm</td>
                    </tr>
                    <tr>
                        <td>http://t.me/dfctippingbot?start=538268078</td>
                        <td>100</td>
                        <td>1000000000DFC</td>
                        <td>Published</td>
                        <td>Monday 24th January 2022 7:40pm</td>
                    </tr>
                    <tr>
                        <td>http://t.me/dfctippingbot?start=538268078</td>
                        <td>100</td>
                        <td>1000000000DFC</td>
                        <td>Published</td>
                        <td>Monday 24th January 2022 7:40pm</td>
                    </tr>
                </tbody>
            </table>
            <nav aria-label="...">
                <ul class="pagination justify-content-end">
                    <li class="page-item disabled">
                        <span class="page-link">Previous</span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item active" aria-current="page">
                        <span class="page-link">2</span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default PromotionTable