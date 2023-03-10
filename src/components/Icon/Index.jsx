import IonicIcon from '@expo/vector-icons/Ionicons'

const Icon = (props) => {
    const {name} = props
    return (
        <IonicIcon name={name} size={24} {...props} />
    )
}
export default Icon