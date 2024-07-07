using System.Text;

namespace Span;

public static class SpanTest
{
    public static void Run()
    {
        int[] array = Enumerable.Range(0, 100).ToArray();
        Span<int> span = new(array, 0, 50);

        var sliced = span.Slice(10, 10);

        Console.WriteLine(Print(sliced));

        Console.WriteLine(Sum(span));


        static string Print(ReadOnlySpan<int> span)
        {
            var sb = new StringBuilder();
            foreach (var item in span)
            {
                sb.Append(item);
                sb.Append(" ");
            }
            return sb.ToString();
        }

        static int Sum(ReadOnlySpan<int> span)
        {
            int sum = 0;
            foreach (var item in span)
            {
                sum += item;
            }
            return sum;
        }
    }
}