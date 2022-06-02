
interface Props {
    _id: string
    urlImage: string
    code: string
    name: string
    category: string
    price: number
    stock: number
}

export const DataTable = ({ urlImage, code, name, category, price, stock }: Props) => {

    const handleDelete = () => {

    }

    return (
        <>
            <tr className='text-center'>
                <th className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                    <img className='object-scale-down h-12 w-12' src={urlImage} alt={name} />
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-blueGray-900 font-medium">
                    {code}
                </td>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                    {name}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                    {category}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                    {price}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                    {stock}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 space-x-1">
                    <button
                        className="p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-base rounded-lg focus:border-4 border-blue-300"
                        //onClick={() => setModal(!modal)}
                    >
                        Actualizar
                    </button>
                    <button
                        className="p-2 pl-5 pr-5 bg-red-500 text-gray-100 text-base rounded-lg focus:border-4 border-red-300"
                        onClick={handleDelete}
                    >
                        Eliminar
                    </button>
                </td>
            </tr>
            {
                /* modal ? <ProductModalUpdate
                    code={code}
                    modal={setModal}
                    nameProduct={nameProduct}
                    category={category}
                    price={price}
                    cant={cant}
                /> : null */
            }
        </>
    )
}
