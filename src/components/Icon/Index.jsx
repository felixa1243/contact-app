import IonicIcon from '@expo/vector-icons/Ionicons'

const Icon = ({name, focused}) => {
    return (
        <IonicIcon name={name} size={24} color={focused ? 'green' : 'black'}/>
    )
}
export default Icon