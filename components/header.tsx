

export function Header () {
    return (
      <div className="flex justify-between p-4 font-sans bg-[#A0F1BD] items-center">
        <div>
          <h2 className="text-[#2E4F21]">Noble Finance</h2>
        </div>
        <nav>
          <ul className="flex gap-4 items-center">
            <li className="text-[#2E4F21]">Services</li>
            <li className="bg-[#2E4F21] p-3 rounded-4xl">Book</li>
          </ul>
        </nav>
      </div>
    );
}