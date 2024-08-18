import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getMahasiswa = async () => {
  const res = await prisma.mahasiswa.findMany();
  return res;
};

export default async function Biodata() {
  const mahasiswa = await getMahasiswa();
  console.log(mahasiswa);

  return (
    <div className="h-screen">
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>nama</th>
            <th>npm</th>
            <th>instagram</th>
            <th>angkatan</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
