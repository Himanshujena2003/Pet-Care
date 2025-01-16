export function InputBox({onChange, placeholder, type }) {
    return <div className="bg-[#F2E3BC]">
      <input className="h-full w-full px-4 py-2 rounded-full" onChange={onChange} placeholder={placeholder} type={type} />
    </div>
}