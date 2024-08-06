export default{
    template:`
        <button 
        
            :class="{
                'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
                'bg-blue-600 hover:bg-blue-00': type === 'primary',
                'bg-red-200 hover:bg-red-400': type === 'secondary',
                'bg-green-200 hover:bg-green-400': type === 'muted',
                'is-loading': processing
                
            }" 
            :disabled="processing"
            
            >
                <slot />
        </button>
    `,

    props: {
        
        type: {
            type: String,
            default: 'primary'
        },

        processing: {
            type: Boolean,
            default: false
        }
    }
}