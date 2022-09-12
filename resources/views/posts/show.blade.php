<x-app>
    <a href="{{route('posts.index')}}" type="button" class="btn btn-light mb-4">Back</a>

    <h1>{{$post->title}}</h1>

    <hr>

    {!! $post->content !!}

</x-app>
