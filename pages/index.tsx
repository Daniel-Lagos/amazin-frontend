import type { GetServerSideProps, NextPage } from 'next';
import { Layout } from '../components/layouts';
import { TableProduct } from '../components/ui/';

// @ts-ignore
const Home: NextPage = ({ session }) => {

  // When rendering client side don't display anything until loading is complete

  // If no session exists, display access denied message


  return (
    <Layout title={'home'} withBackground={false}>
      <div
        className="w-full max-w-3xl p-3 m-auto bg-white rounded-md shadow-md  mt-5 dark:bg-gray-800">

        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

            <div className="mt-3">
              <label
                className="block text-md text-gray-900 font-medium dark:text-gray-200">Codigo</label>
              <input
                name="code"
                type="text"
                className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="132AFG"
              />
            </div>

            <div className="mt-3">
              <label
                className="block text-md text-gray-900 font-medium dark:text-gray-200">Nombre
                Producto</label>
              <input
                name="nameProduct"
                type="text"
                className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Arroz"
              />
            </div>

            <div className="mt-3">
              <label
                className="block text-md text-gray-900 font-medium dark:text-gray-200">Precio</label>
              <input
                name="price"
                type="number"
                className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="12800"
              />
            </div>

            <div className="mt-3">
              <label
                className="block text-md text-gray-900 font-medium dark:text-gray-200">Cantidad</label>
              <input
                name="cant"
                type="number"
                className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="20"
              />
            </div>

            <div className="mt-3 w-auto">
              <label
                className="block text-md text-gray-900 font-medium dark:text-gray-200">Categoria</label>
              <select className="form-select appearance-none
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding bg-no-repeat
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white
                  focus:border-blue-600 focus:outline-none"
                      aria-label="Default select example"
                      name="category"
              >
                <option>Seleccione la categoria...</option>
                <option value="PAPELERIA">Papeleria</option>
                <option value="FARMACIA">Farmacia</option>
                <option value="ASEO">Aseo</option>
                <option value="HOGAR">Hogar</option>
                <option value="FERRETERIA">Ferreteria</option>
                <option value="OTROS">Otros</option>
                <option value="PROMOCION">Promoción</option>
              </select>
            </div>

            <div className="mt-3">
              <label
                className="block text-md text-gray-900 font-medium dark:text-gray-200">Imagen</label>
              <input
                name={'image'}
                type={'file'}
                className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                //onChange={handleFile}
              />
            </div>

            <div className="mt-1">
              <button
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                type="submit"
              >
                Añadir Producto
              </button>
            </div>
          </div>
        </form>

      </div>

      <TableProduct/>

    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {

  return {
    props: {
      //session
    }
  };
};

export default Home;
