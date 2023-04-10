'use client'

export default function CategoryTag({ category, onSelect }) {
    const categories = [
        { name: 'all', text: '전체' },
        { name: 'dog', text: '강아지' },
        { name: 'cat', text: '고양이' },
        { name: 'etc', text: '기타' },
      ];
   
return (
    <nav className="flex ml-2 max-w-xs">
        {categories.map((cate)=>(
            <button
            className={`w-14 h-8 ml-2 rounded-lg ${category === cate.text ? "bg-red-100": "bg-gray-200"} `}
             key={cate.name}>
                {cate.text}
            </button>
        ))}
    </nav>
)
}