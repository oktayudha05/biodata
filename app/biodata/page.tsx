export default function Biodata() {
  return (
    <>
      <div className="overflow-x-auto">
        <div className="text-center">
          <h1 className="text-2xl font-bold mt-16">Biodata</h1>
        </div>
        <div className="mx-12 mt-3">
          <table className="table-auto sm:table border-spacing-x-4 border-separate">
            <thead className="text-sm md:text-lg">
              <tr>
                <th>Nama</th>
                <th>NPM</th>
                <th>No. Hp</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">SMK PN2</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>2320506044</div>
                </td>
                <td>
                  <div>085772951900</div>
                </td>
                <th>
                  <button className="btn btn-ghost btn-sm sm:btn-md border rounded-full border-teal-600">details</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}